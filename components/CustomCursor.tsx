'use client'
import { useEffect } from 'react'

export default function CustomCursor() {
    useEffect(() => {
        const dot = document.getElementById('cur')!
        const ring = document.getElementById('cur-r')!
        if (!dot || !ring) return

        let rx = 0, ry = 0
        let mx = 0, my = 0

        const onMove = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY
            dot.style.left = mx + 'px'
            dot.style.top = my + 'px'
        }

        let rafId: number
        const lerp = () => {
            rx += (mx - rx) * 0.1
            ry += (my - ry) * 0.1
            ring.style.left = rx + 'px'
            ring.style.top = ry + 'px'
            rafId = requestAnimationFrame(lerp)
        }
        rafId = requestAnimationFrame(lerp)

        window.addEventListener('mousemove', onMove)

        // Hover detection
        const hoverEls = document.querySelectorAll('a, button, .prc, .ac')
        const addH = () => document.body.classList.add('h')
        const remH = () => document.body.classList.remove('h')
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', addH)
            el.addEventListener('mouseleave', remH)
        })

        return () => {
            window.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(rafId)
            hoverEls.forEach(el => {
                el.removeEventListener('mouseenter', addH)
                el.removeEventListener('mouseleave', remH)
            })
        }
    }, [])

    return (
        <>
            <div id="cur" />
            <div id="cur-r" />
        </>
    )
}
