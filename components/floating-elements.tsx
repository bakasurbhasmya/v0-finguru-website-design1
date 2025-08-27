"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating financial symbols */}
      <div className="absolute top-20 left-10 animate-float-slow opacity-20">
        <div className="text-primary text-2xl">$</div>
      </div>
      <div className="absolute top-40 right-20 animate-float-medium opacity-15">
        <div className="text-blue-400 text-xl">€</div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-fast opacity-10">
        <div className="text-primary text-lg">₹</div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow opacity-20">
        <div className="text-blue-400 text-2xl">¥</div>
      </div>

      {/* Animated chart lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5">
        <path
          d="M0,300 Q200,250 400,280 T800,260"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary animate-draw-line"
        />
        <path
          d="M0,400 Q300,350 600,380 T1200,360"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-400 animate-draw-line-delayed"
        />
      </svg>
    </div>
  )
}
