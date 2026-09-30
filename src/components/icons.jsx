import {
  ShoppingCart, Shield, Dices, HeartPulse, GraduationCap, Scale, Plane, Cross,
  Swords, VenetianMask, TrendingUp, Briefcase, Activity, Gauge, Trophy, Sun,
  Moon, FlaskConical, Coins, Target, Zap, HeartHandshake, Users,
} from 'lucide-react'

export const ICONS = {
  ShoppingCart, Shield, Dices, HeartPulse, GraduationCap, Scale, Plane, Cross,
  Swords, VenetianMask, TrendingUp, Briefcase, Activity, Gauge, Trophy, Sun,
  Moon, FlaskConical, Coins, Target, Zap, HeartHandshake, Users,
}

export function Icon({ name, size = 18, className = '', strokeWidth = 2 }) {
  const C = ICONS[name] || Briefcase
  return <C size={size} className={className} strokeWidth={strokeWidth} />
}
