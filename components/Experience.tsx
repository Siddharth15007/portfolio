'use client'
import { useState } from 'react'
import { experiences } from '@/lib/data'

export default function Experience() {
    const [active, setActive] = useState(0)

    return (
        <section
            id="experience"
            style={{
                padding: '130px 64px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div className="sec-label">Work History</div>
                <h2 className="sec-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '52px' }}>
                    Work Experience
                </h2>

                <div
                    className="exp-layout"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '260px 1fr',
                    }}
                >
                    {/* Left — Tab Nav */}
                    <div
                        className="exp-nav"
                        style={{
                            borderRight: '1px solid var(--bd2)',
                            paddingRight: '44px',
                        }}
                    >
                        <div
                            style={{
                                position: 'sticky',
                                top: 92,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                            }}
                            className="exp-tabs"
                        >
                            {experiences.map((exp, i) => (
                                <button
                                    key={exp.id}
                                    onClick={() => setActive(i)}
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.6rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: active === i ? 'var(--a1)' : 'var(--muted)',
                                        background: active === i ? 'rgba(56,139,253,0.08)' : 'transparent',
                                        border: 'none',
                                        borderLeft: `2px solid ${active === i ? 'var(--a1)' : 'transparent'}`,
                                        padding: '13px 18px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        transition: 'color 0.2s, background 0.2s, border-color 0.2s',
                                        width: '100%',
                                        borderRadius: '0 5px 5px 0',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (active !== i) {
                                            e.currentTarget.style.color = 'var(--text)'
                                            e.currentTarget.style.background = 'rgba(56,139,253,0.05)'
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (active !== i) {
                                            e.currentTarget.style.color = 'var(--muted)'
                                            e.currentTarget.style.background = 'transparent'
                                        }
                                    }}
                                >
                                    {exp.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right — Panel */}
                    <div style={{ paddingLeft: '52px' }}>
                        {experiences.map((exp, i) => (
                            <div
                                key={exp.id}
                                style={{
                                    display: active === i ? 'block' : 'none',
                                    animation: 'fu 0.4s ease both',
                                }}
                            >
                                {/* Period */}
                                <div
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.6rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--a2)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    {exp.period}
                                </div>
                                {/* Role */}
                                <h3
                                    style={{
                                        fontFamily: 'var(--font-outfit)',
                                        fontWeight: 800,
                                        fontSize: '1.4rem',
                                        color: 'var(--white)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {exp.role}
                                </h3>
                                {/* Company */}
                                <div
                                    style={{
                                        fontSize: '0.88rem',
                                        color: 'var(--a1)',
                                        fontStyle: 'italic',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {exp.company}
                                </div>
                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: '0.92rem',
                                        color: 'var(--muted)',
                                        lineHeight: 1.85,
                                        fontWeight: 300,
                                        marginBottom: '24px',
                                        maxWidth: 600,
                                    }}
                                >
                                    {exp.description}
                                </p>
                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="exp-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .exp-layout { grid-template-columns: 1fr !important; }
          .exp-nav {
            border-right: none !important;
            border-bottom: 1px solid var(--bd2) !important;
            padding-right: 0 !important;
            padding-bottom: 20px !important;
            margin-bottom: 32px !important;
          }
          .exp-tabs {
            flex-direction: row !important;
            overflow-x: auto !important;
            position: static !important;
          }
          .exp-layout > div:last-child { padding-left: 0 !important; }
          #experience { padding: 80px 24px !important; }
        }
      `}</style>
        </section>
    )
}
