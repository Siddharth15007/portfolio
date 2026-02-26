'use client'
import { useEffect } from 'react'

export default function Particles() {
    useEffect(() => {
        const container = document.getElementById('particles-container')
        if (!container) return

        const colors = [
            'rgba(56,139,253,0.65)',
            'rgba(0,212,170,0.5)',
            'rgba(157,111,255,0.45)',
        ]

        for (let i = 0; i < 32; i++) {
            const p = document.createElement('div')
            const size = 1 + Math.random() * 2.5
            const color = colors[Math.floor(Math.random() * colors.length)]
            const left = Math.random() * 100
            const duration = 10 + Math.random() * 18
            const delay = Math.random() * 14

            p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        left: ${left}vw;
        bottom: 0;
        animation: ptup ${duration}s ${delay}s infinite linear;
      `
            container.appendChild(p)
        }

        return () => {
            container.innerHTML = ''
        }
    }, [])

    return (
        <div
            id="particles-container"
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden',
            }}
        />
    )
}
