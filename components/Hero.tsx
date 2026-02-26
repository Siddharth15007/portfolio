'use client'
import { useCounter } from '@/hooks/useCounter'

function StatCounter({ target, label }: { target: number; label: string }) {
    const { count, ref } = useCounter(target)
    return (
        <div
            ref={ref}
            style={{ textAlign: 'center', padding: '0 32px', borderRight: '1px solid var(--bd2)' }}
            className="stat-item"
        >
            <div
                style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 900,
                    fontSize: '2.4rem',
                    color: 'var(--white)',
                    lineHeight: 1,
                }}
            >
                {count}+
            </div>
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.56rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--muted)',
                    marginTop: '6px',
                }}
            >
                {label}
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100vh',
                padding: '110px 64px 80px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '60px',
                alignItems: 'center',
                zIndex: 1,
                overflow: 'hidden',
            }}
        >
            {/* Floating Orbs */}
            <div
                style={{
                    position: 'absolute',
                    width: 680,
                    height: 680,
                    borderRadius: '50%',
                    background: 'rgba(56,139,253,0.18)',
                    filter: 'blur(80px)',
                    top: '-10%',
                    right: '-5%',
                    animation: 'od 9s ease-in-out infinite alternate',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: 480,
                    height: 480,
                    borderRadius: '50%',
                    background: 'rgba(157,111,255,0.12)',
                    filter: 'blur(80px)',
                    bottom: '5%',
                    left: '-5%',
                    animation: 'od 12s ease-in-out infinite alternate-reverse',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: 320,
                    height: 320,
                    borderRadius: '50%',
                    background: 'rgba(0,212,170,0.09)',
                    filter: 'blur(80px)',
                    top: '40%',
                    right: '30%',
                    animation: 'od 15s ease-in-out infinite alternate',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Left Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Availability Chip */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        border: '1px solid rgba(0,212,170,0.28)',
                        background: 'rgba(0,212,170,0.05)',
                        borderRadius: '999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--a2)',
                        marginBottom: '28px',
                        animation: 'fu 0.6s ease 0s both',
                    }}
                >
                    <span
                        style={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            background: 'var(--a2)',
                            display: 'inline-block',
                            animation: 'crp 2s ease-in-out infinite',
                        }}
                    />
                    Available for Opportunities
                </div>

                {/* H1 */}
                <h1
                    style={{
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 900,
                        fontSize: 'clamp(4rem, 9.5vw, 8.5rem)',
                        lineHeight: 0.92,
                        letterSpacing: '-0.04em',
                        marginBottom: '24px',
                        animation: 'fu 0.6s ease 0.08s both',
                    }}
                >
                    <div style={{ color: 'var(--white)' }}>Siddharth</div>
                    <div
                        style={{
                            backgroundImage: 'linear-gradient(115deg, #388bfd 0%, #00d4aa 50%, #9d6fff 100%)',
                            backgroundSize: '200%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'gs 6s ease-in-out infinite',
                        }}
                    >
                        Parekh
                    </div>
                </h1>

                {/* Subtitle */}
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(0.68rem, 1.1vw, 0.82rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.22em',
                        color: 'var(--muted)',
                        marginBottom: '22px',
                        animation: 'fu 0.6s ease 0.16s both',
                    }}
                >
                    AI Systems Engineer · Mobile Architect ·{' '}
                    <span style={{ color: 'var(--a1)' }}>India 🇮🇳</span>
                </div>

                {/* Description */}
                <p
                    style={{
                        fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                        color: 'var(--muted)',
                        maxWidth: 540,
                        lineHeight: 1.85,
                        fontWeight: 300,
                        marginBottom: '36px',
                        animation: 'fu 0.6s ease 0.24s both',
                    }}
                >
                    I design and build{' '}
                    <strong style={{ color: 'var(--text)', fontWeight: 500 }}>production-grade AI systems</strong>{' '}—
                    {' '}advanced RAG with evaluation pipelines, multi-agent orchestration, and{' '}
                    <strong style={{ color: 'var(--text)', fontWeight: 500 }}>on-device ML</strong>{' '}
                    inside Flutter apps. Not wrappers. Actual architecture.
                </p>

                {/* Buttons */}
                <div
                    style={{
                        display: 'flex',
                        gap: '14px',
                        flexWrap: 'wrap',
                        animation: 'fu 0.6s ease 0.32s both',
                    }}
                >
                    <a
                        href="#projects"
                        className="btn-primary"
                        style={{
                            background: 'var(--a1)',
                            color: 'var(--white)',
                            padding: '14px 36px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            display: 'inline-block',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)'
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(56,139,253,0.45)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        style={{
                            background: 'transparent',
                            color: 'var(--muted)',
                            padding: '14px 36px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            border: '1px solid var(--border)',
                            transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                            display: 'inline-block',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--a1)'
                            e.currentTarget.style.color = 'var(--a1)'
                            e.currentTarget.style.background = 'rgba(56,139,253,0.06)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)'
                            e.currentTarget.style.color = 'var(--muted)'
                            e.currentTarget.style.background = 'transparent'
                        }}
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Stats Strip */}
                <div
                    style={{
                        display: 'flex',
                        marginTop: '64px',
                        paddingTop: '40px',
                        borderTop: '1px solid var(--bd2)',
                        animation: 'fu 0.6s ease 0.4s both',
                    }}
                >
                    <StatCounter target={4} label="Years Experience" />
                    <StatCounter target={12} label="Apps Shipped" />
                    <div
                        style={{ textAlign: 'center', padding: '0 32px' }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-outfit)',
                                fontWeight: 900,
                                fontSize: '2.4rem',
                                color: 'var(--white)',
                                lineHeight: 1,
                            }}
                        >
                            5+
                        </div>
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.56rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.18em',
                                color: 'var(--muted)',
                                marginTop: '6px',
                            }}
                        >
                            Clients Served
                        </div>
                    </div>
                </div>
            </div>

            {/* Right — Code Card */}
            <div
                className="hero-code-card"
                style={{
                    width: 330,
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                    position: 'relative',
                    zIndex: 1,
                    animation: 'fu 0.6s ease 0.2s both',
                }}
            >
                {/* Title bar */}
                <div
                    style={{
                        background: 'var(--bg2)',
                        padding: '11px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                    <span
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            color: 'var(--muted)',
                            marginLeft: '6px',
                        }}
                    >
                        siddharth.dart
                    </span>
                </div>
                {/* Code body */}
                <div
                    style={{
                        padding: '22px 20px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        lineHeight: 1.9,
                    }}
                >
                    <div style={{ color: '#3d5a80' }}>{'// Stack overview'}</div>
                    <div>
                        <span style={{ color: '#9d6fff' }}>class </span>
                        <span style={{ color: '#388bfd' }}>Engineer </span>
                        <span style={{ color: 'var(--text)' }}>{'{'}</span>
                    </div>
                    <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: '#9d6fff' }}>final </span>
                        <span style={{ color: 'var(--text)' }}>name = </span>
                        <span style={{ color: '#00d4aa' }}>&apos;Siddharth&apos;</span>
                        <span style={{ color: 'var(--text)' }}>;</span>
                    </div>
                    <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: '#9d6fff' }}>final </span>
                        <span style={{ color: 'var(--text)' }}>focus = </span>
                        <span style={{ color: '#00d4aa' }}>&apos;AI + Mobile&apos;</span>
                        <span style={{ color: 'var(--text)' }}>;</span>
                    </div>
                    <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: '#9d6fff' }}>final </span>
                        <span style={{ color: 'var(--text)' }}>base = </span>
                        <span style={{ color: '#00d4aa' }}>&apos;India 🇮🇳&apos;</span>
                        <span style={{ color: 'var(--text)' }}>;</span>
                    </div>
                    <div>&nbsp;</div>
                    <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: '#9d6fff' }}>final </span>
                        <span style={{ color: 'var(--text)' }}>stack = [</span>
                    </div>
                    {["'FlutterAI'", "'AdvancedRAG'", "'AgentOrch'", "'Whisper'", "'RAGAS'", "'TFLite'"].map((s, i) => (
                        <div key={i} style={{ paddingLeft: 32 }}>
                            <span style={{ color: '#00d4aa' }}>{s}</span>
                            <span style={{ color: 'var(--text)' }}>,</span>
                        </div>
                    ))}
                    <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: 'var(--text)' }}>];</span>
                    </div>
                    <div>&nbsp;</div>
                    <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: '#9d6fff' }}>bool </span>
                        <span style={{ color: 'var(--text)' }}>get openToWork =&gt;</span>
                    </div>
                    <div style={{ paddingLeft: 32 }}>
                        <span style={{ color: '#ff9d3d' }}>true</span>
                        <span style={{ color: 'var(--text)' }}>;</span>
                    </div>
                    <div style={{ color: 'var(--text)' }}>{'}'}</div>
                    <div>
                        <span
                            style={{
                                display: 'inline-block',
                                width: 7,
                                height: 13,
                                background: 'var(--a1)',
                                animation: 'bl 1s step-end infinite',
                                verticalAlign: 'middle',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Cue */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 36,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 1,
                    animation: 'scp 2.5s ease-in-out infinite',
                }}
            >
                <div
                    style={{
                        width: 1,
                        height: 44,
                        background: 'linear-gradient(to bottom, transparent, var(--a1))',
                    }}
                />
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.52rem',
                        letterSpacing: '0.2em',
                        color: 'var(--muted)',
                    }}
                >
                    SCROLL
                </span>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .hero-code-card { display: none !important; }
          section#home { grid-template-columns: 1fr !important; padding: 100px 24px 80px !important; }
        }
        .stat-item:last-child { border-right: none !important; }
      `}</style>
        </section>
    )
}
