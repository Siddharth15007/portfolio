'use client'
// components/About.tsx
import { aboutCards } from '@/lib/data'

function AboutCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
    return (
        <div
            className="ac"
            style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '26px 22px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                cursor: 'default',
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(56,139,253,0.3)'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 16px 48px rgba(56,139,253,0.1)'
                const bar = el.querySelector('.card-bar') as HTMLElement
                if (bar) bar.style.transform = 'scaleX(1)'
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                const bar = el.querySelector('.card-bar') as HTMLElement
                if (bar) bar.style.transform = 'scaleX(0)'
            }}
        >
            <div
                className="card-bar"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, var(--a1), var(--a2))',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                }}
            />
            <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{icon}</div>
            <div
                style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--white)',
                    marginBottom: '8px',
                }}
            >
                {title}
            </div>
            <div
                style={{
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                }}
            >
                {desc}
            </div>
        </div>
    )
}

export default function About() {
    return (
        <section
            id="about"
            style={{
                padding: '130px 64px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '5fr 6fr',
                    gap: '90px',
                    alignItems: 'center',
                }}
                className="about-grid"
            >
                {/* Left */}
                <div className="rvl">
                    <div className="sec-label">About Me</div>
                    <h2
                        className="sec-h2"
                        style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', marginBottom: '28px' }}
                    >
                        Building intelligent software
                        <br />
                        at the edge of what&apos;s
                        <br />
                        possible.
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <p style={{ fontSize: '0.96rem', color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>
                            I&apos;m an <strong style={{ color: 'var(--text)', fontWeight: 500 }}>AI Systems Engineer and Mobile Architect</strong> with 4+ years of Flutter expertise — now building the layer above the model: evaluation pipelines, agentic orchestration, and on-device inference.
                        </p>
                        <p style={{ fontSize: '0.96rem', color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>
                            I&apos;ve shipped production apps for clients across India and the Middle East — from fintech and healthcare to enterprise workflows. Beyond API calling, I focus on{' '}
                            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>retrieval quality, hallucination testing, structured outputs, and latency-aware design</strong>.
                        </p>
                        <p style={{ fontSize: '0.96rem', color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>
                            The rarest combination in 2026: someone who can ship a{' '}
                            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Flutter app, design multi-agent systems, evaluate their output quality, and run inference on-device</strong>{' '}
                            — end to end, without splitting the problem across 4 people.
                        </p>
                    </div>
                </div>

                {/* Right — 4 cards */}
                <div
                    className="rv"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '14px',
                    }}
                >
                    {aboutCards.map((card) => (
                        <AboutCard key={card.title} {...card} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about { padding: 80px 24px !important; }
        }
      `}</style>
        </section>
    )
}
