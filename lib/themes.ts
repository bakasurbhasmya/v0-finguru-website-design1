export const themes = {
  default: {
    name: "Finguru Dark",
    description: "Professional dark theme for financial trading",
    className: "dark",
  },
  crypto: {
    name: "Crypto Trader",
    description: "Bitcoin orange and Ethereum purple theme",
    className: "theme-crypto dark",
  },
  forex: {
    name: "Forex Master",
    description: "Currency trading green and blue theme",
    className: "theme-forex dark",
  },
  equity: {
    name: "Stock Market",
    description: "Traditional stock market blue and green theme",
    className: "theme-equity dark",
  },
} as const

export type ThemeKey = keyof typeof themes
