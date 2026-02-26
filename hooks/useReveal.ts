// hooks/useReveal.ts
import { useEffect, useRef } from 'react'

export function useReveal(options: IntersectionObserverInit = {}) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) el.classList.add('vis')
            },
            { threshold: 0.1, ...options }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return ref
}
