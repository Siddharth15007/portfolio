'use client'
// components/Skills.tsx
import { skillCategories, TagVariant } from '@/lib/data'

const tagClass = (v: TagVariant) => {
    if (v === 'hot') return 'tg hot'
    if (v === 'ai') return 'tg ai'
    if (v === 'au') return 'tg au'
    return 'tg'
}

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                background: 'var(--bg2)',
                borderTop: '1px solid var(--bd2)',
                borderBottom: '1px solid var(--bd2)',
                padding: '130px 64px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                    <div className="sec-label" style={{ justifyContent: 'center' }}>Technical Skills</div>
                    <h2 className="sec-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '14px' }}>
                        What I Work With
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                        A curated toolkit spanning AI systems, mobile development, and cloud infrastructure.
                    </p>
                </div>

                {/* 6-card grid */}
                <div
                    className="skills-grid rv"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '18px',
                    }}
                >
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.name}
                            style={{
                                background: 'var(--bg)',
                                border: '1px solid var(--border)',
                                borderRadius: 12,
                                padding: '30px 26px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget
                                el.style.borderColor = 'rgba(56,139,253,0.28)'
                                el.style.boxShadow = '0 8px 32px rgba(56,139,253,0.07)'
                                el.style.transform = 'translateY(-3px)'
                                const glow = el.querySelector('.skill-glow') as HTMLElement
                                if (glow) glow.style.opacity = '1'
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget
                                el.style.borderColor = 'var(--border)'
                                el.style.boxShadow = 'none'
                                el.style.transform = 'translateY(0)'
                                const glow = el.querySelector('.skill-glow') as HTMLElement
                                if (glow) glow.style.opacity = '0'
                            }}
                        >
                            {/* Glow */}
                            <div
                                className="skill-glow"
                                style={{
                                    position: 'absolute',
                                    top: -20,
                                    right: -20,
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    background: cat.glowColor,
                                    filter: 'blur(30px)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    pointerEvents: 'none',
                                }}
                            />
                            {/* Header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 9,
                                        background: cat.iconBg,
                                        border: `1px solid ${cat.iconBorder}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    {cat.icon}
                                </div>
                                <span
                                    style={{
                                        fontFamily: 'var(--font-outfit)',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        color: 'var(--white)',
                                    }}
                                >
                                    {cat.name}
                                </span>
                            </div>
                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {cat.tags.map((tag) => (
                                    <span key={tag.label} className={tagClass(tag.variant)}>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills { padding: 80px 24px !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}
