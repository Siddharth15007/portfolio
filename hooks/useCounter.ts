// hooks/useCounter.ts
import { useState, useEffect, useRef } from 'react'

export function useCounter(target: number, duration = 1600) {
    const [count, setCount] = useState(0)
    const triggered = useRef(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !triggered.current) {
                    triggered.current = true
                    const steps = 40
                    const interval = duration / steps
                    const increment = target / steps
                    let current = 0
                    const timer = setInterval(() => {
                        current += increment
                        if (current >= target) {
                            setCount(target)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(current))
                        }
                    }, interval)
                }
            },
            { threshold: 0.5 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [target, duration])

    return { count, ref }
}
