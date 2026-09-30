import asyncio
from playwright.async_api import async_playwright

BASE = "http://localhost:5173"
results = []

def check(name, cond):
    results.append((name, bool(cond)))
    print(("PASS " if cond else "FAIL ") + name)

FULL = {
    "level": 27, "player_id": 1, "name": "FullData", "rank": "Veteran", "age": 400,
    "property": "Private Island",
    "job": {"position": "Surgeon", "company_id": 0, "company_name": "Medical (City Job)", "company_type": 0},
    "bars": {
        "energy": {"current": 96, "maximum": 150},
        "nerve": {"current": 38, "maximum": 55},
        "happy": {"current": 4365, "maximum": 5025},
        "life": {"current": 1930, "maximum": 2000},
    },
    "battlestats": {"strength": 100000, "defense": 90000, "speed": 120000, "dexterity": 80000, "total": 390000},
    "workstats": {"manual_labor": 1300, "intelligence": 5000, "endurance": 2000},
    "education_current": 0, "education_completed": [1, 2],
    "networth": {"total": 500000000},
}

# The reported failure mode: profile data arrives but bars/battlestats missing
PARTIAL = {k: v for k, v in FULL.items() if k not in ("bars", "battlestats", "workstats", "education_completed", "networth")}
PARTIAL["name"] = "PartialData"

async def connect(page, payload, mode="ok"):
    calls = {"n": 0}
    async def handler(route):
        calls["n"] += 1
        if mode == "abort" and calls["n"] > 1:
            await route.abort()
        else:
            await route.fulfill(json=payload)
    await page.route("**/api/torn*", handler)
    await page.get_by_text("Connect API").first.click()
    await page.locator("input[type=password]").fill("cachekey")
    await page.get_by_role("button", name="Connect", exact=True).click()
    await page.wait_for_timeout(900)

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 1000})
        errors = []
        page.on("pageerror", lambda e: errors.append("pageerror: " + str(e)))
        page.on("console", lambda m: errors.append("console: " + m.text) if m.type == "error" else None)
        await page.goto(BASE, wait_until="networkidle")

        # 1) full data
        await connect(page, FULL)
        body = await page.inner_text("body")
        check("full: name shows", "FullData" in body)
        check("full: debug panel present", "API debug" in body or "API DEBUG" in body.upper())
        await page.locator("details").filter(has_text="API debug").first.click() if await page.locator("details").count() else None
        await page.wait_for_timeout(300)
        body = await page.inner_text("body")
        check("full: all selection chips green", body.count("✓") >= 5 and "✗ bars" not in body and "✗ battlestats" not in body)
        check("full: raw JSON in debug", "battlestats" in body)

        # 2) partial data (user's reported symptom)
        await page.locator("button[title='Disconnect profile']").click()
        await page.wait_for_timeout(300)
        await page.unroute("**/api/torn*")
        await connect(page, PARTIAL)
        await page.wait_for_timeout(300)
        await page.locator("details").filter(has_text="API debug").first.click()
        await page.wait_for_timeout(300)
        body = await page.inner_text("body")
        check("partial: dossier renders (name)", "PartialData" in body)
        check("partial: red chips flag missing selections", "✗ bars" in body and "✗ battlestats" in body)
        check("partial: bars show defaults 0/100", "0 / 100" in body)

        # 3) failed sync shows banner
        await page.locator("button[title='Disconnect profile']").click()
        await page.wait_for_timeout(300)
        await page.unroute("**/api/torn*")
        await connect(page, FULL, mode="abort")
        # trigger a manual refresh -> second call aborts -> error state
        await page.locator("button[title='Refresh profile']").click()
        await page.wait_for_timeout(1200)
        check("failed sync: banner appears", await page.get_by_text("Live sync failed", exact=False).count() >= 1)

        # 4) demo: no debug panel
        await page.locator("button[title='Disconnect profile']").click()
        await page.wait_for_timeout(300)
        await page.get_by_role("button", name="Try demo", exact=True).click()
        await page.get_by_text("Lv. 15 Plushie Flyer").first.click()
        await page.wait_for_timeout(500)
        body = await page.inner_text("body")
        check("demo: bars work (25/25)", "25 / 25" in body)
        check("demo: no debug panel", "API debug" not in body)

        print("ERRORS:", errors if errors else "none")
        await browser.close()

asyncio.run(main())
fails = [n for n, ok in results if not ok]
print()
print(f"{len(results) - len(fails)}/{len(results)} checks passed")
exit(1 if fails else 0)
