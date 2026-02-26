'use client'
// components/Navbar.tsx
import { navLinks } from '@/lib/data'

export default function Navbar() {
    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                height: '66px',
                backdropFilter: 'blur(24px) saturate(180%)',
                background: 'rgba(4,6,15,0.78)',
                borderBottom: '1px solid var(--bd2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 64px',
            }}
        >
            {/* Logo */}
            <a
                href="#"
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <span>
                    <span style={{ color: 'var(--a1)', opacity: 0.6 }}>[</span>
                    SP
                    <span style={{ color: 'var(--a1)', opacity: 0.6 }}>]</span>
                </span>
                <span
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--a2)',
                        display: 'inline-block',
                        animation: 'ldp 2.5s ease-in-out infinite',
                    }}
                />
            </a>

            {/* Nav Links — hidden on mobile */}
            <div
                className="nav-links"
                style={{
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                            padding: '6px 12px',
                            borderRadius: '5px',
                            transition: 'color 0.2s, background 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget
                            el.style.color = 'var(--a1)'
                            el.style.background = 'rgba(56,139,253,0.08)'
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget
                            el.style.color = 'var(--muted)'
                            el.style.background = 'transparent'
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <a
                href="#contact"
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--white)',
                    background: 'var(--a1)',
                    textDecoration: 'none',
                    padding: '9px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    transition: 'background 0.25s, box-shadow 0.25s, transform 0.2s',
                    display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'var(--a2)'
                    el.style.boxShadow = '0 0 28px rgba(0,212,170,0.4)'
                    el.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'var(--a1)'
                    el.style.boxShadow = 'none'
                    el.style.transform = 'translateY(0)'
                }}
            >
                Hire Me →
            </a>

            <style>{`
        @media (max-width: 1023px) {
          .nav-links { display: none !important; }
        }
      `}</style>
        </nav>
    )
}
