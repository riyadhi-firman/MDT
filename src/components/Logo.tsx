import * as React from "react"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Blue Circle with gap on the right */}
          <path d="M 82 22 A 42 42 0 1 0 82 78" fill="none" stroke="#283593" strokeWidth="14" />
          {/* The letter M */}
          <path d="M 33 68 L 33 32 L 50 52 L 67 32 L 67 68" fill="none" stroke="#283593" strokeWidth="12" strokeLinejoin="miter" />
          {/* The two dashes on the right gap */}
          <path d="M 82 38 L 94 38 M 82 62 L 94 62" stroke="#283593" strokeWidth="8" strokeLinecap="square" />
        </svg>
      </div>
      <span className="text-3xl font-extrabold tracking-tighter text-[#D32F2F] mt-1">
        Tech
      </span>
    </div>
  )
}
