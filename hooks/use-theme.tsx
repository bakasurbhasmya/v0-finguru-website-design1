"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { themes, type ThemeKey } from "@/lib/themes"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: ThemeKey
  storageKey?: string
}

type ThemeProviderState = {
  theme: ThemeKey
  setTheme: (theme: ThemeKey) => void
  themes: typeof themes
}

const initialState: ThemeProviderState = {
  theme: "default",
  setTheme: () => null,
  themes,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "default",
  storageKey = "finguru-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeKey>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const stored = localStorage.getItem(storageKey) as ThemeKey

    if (stored && stored in themes) {
      setTheme(stored)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    Object.values(themes).forEach(({ className }) => {
      root.classList.remove(...className.split(" "))
    })

    // Add current theme classes
    root.classList.add(...themes[theme].className.split(" "))

    // Store theme preference
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme: ThemeKey) => {
      // Add ripple effect for theme transitions
      const root = window.document.documentElement
      root.classList.add("ripple-effect", "active")

      setTimeout(() => {
        setTheme(theme)
        root.classList.remove("ripple-effect", "active")
      }, 300)
    },
    themes,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <div className="theme-transition">{children}</div>
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
