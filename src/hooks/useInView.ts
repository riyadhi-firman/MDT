import { useEffect, useState } from "react"

export function useInView(
  ref: React.RefObject<Element | null>,
  options?: IntersectionObserverInit & { once?: boolean }
) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options?.once) {
          observer.unobserve(el)
        }
      } else if (!options?.once) {
        setIsInView(false)
      }
    }, options)

    observer.observe(el)

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, [ref, options?.rootMargin, options?.once, options?.threshold])

  return isInView
}
