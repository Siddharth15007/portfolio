'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.rv, .rvl')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('vis')
                    }
                })
            },
            { threshold: 0.08 }
        )
        els.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])
    return null
}
