import asyncio
from playwright.async_api import async_playwright

BASE = "http://localhost:5173"
FULL = {
    "level": 27, "player_id": 1, "name": "FullData", "rank": "Veteran", "age": 400,
    "property": "Private Island",
    "job": {"position": "Surgeon", "company_id": 0, "company_name": "Medical (City Job)", "company_type": 0},
    "bars": {"energy": {"current": 96, "maximum": 150}, "nerve": {"current": 38, "maximum": 55},
             "happy": {"current": 4365, "maximum": 5025}, "life": {"current": 1930, "maximum": 2000}},
    "battlestats": {"strength": 1, "defense": 1, "speed": 1, "dexterity": 1, "total": 4},
    "workstats": {"manual_labor": 1300, "intelligence": 5000, "endurance": 2000},
    "education_current": 0, "education_completed": [1],
    "networth": {"total": 5},
}

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        errors = []
        page.on("console", lambda m: errors.append(f"{m.type}: {m.text}"))
        page.on("pageerror", lambda e: errors.append("pageerror: " + str(e)))
        await page.goto(BASE, wait_until="networkidle")

        calls = {"n": 0}
        async def handler(route):
            calls["n"] += 1
            print(f"[route] call {calls['n']} -> {'ABORT' if calls['n'] > 1 else 'fulfill'}")
            if calls["n"] > 1:
                await route.abort()
            else:
                await route.fulfill(json=FULL)
        await page.route("**/api/torn?*", handler)

        await page.get_by_text("Connect API").first.click()
        await page.locator("input[type=password]").fill("cachekey")
        await page.get_by_role("button", name="Connect", exact=True).click()
        await page.wait_for_timeout(1000)
        print("after connect: url =", page.url, "| route calls:", calls["n"])

        await page.locator("button[title='Refresh profile']").click()
        await page.wait_for_timeout(2000)
        print("after refresh: route calls:", calls["n"])
        body = await page.inner_text("body")
        print("banner text present:", "Live sync failed" in body)
        print("'Incorrect key' present:", "Incorrect key" in body)
        print("still on dashboard:", "Citizen dossier" in body.upper() or "CITIZEN DOSSIER" in body)
        # what top banners exist?
        banners = await page.evaluate("""() => Array.from(document.querySelectorAll('div.rounded-xl')).slice(0,5).map(d => d.textContent.slice(0,80))""")
        print("top rounded-xl divs:", banners)
        print("console errors:", errors)
        await browser.close()

asyncio.run(main())
