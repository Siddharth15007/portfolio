'use client'
// components/Projects.tsx
import { projects } from '@/lib/data'

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                background: 'var(--bg2)',
                borderTop: '1px solid var(--bd2)',
                padding: '130px 64px',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div className="sec-label" style={{ justifyContent: 'center' }}>Portfolio</div>
                    <h2 className="sec-h2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '14px' }}>
                        Selected Projects
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                        A selection of real projects spanning AI, mobile, and automation.
                    </p>
                </div>

                {/* Grid */}
                <div
                    className="projects-grid rv"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '22px',
                    }}
                >
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className="prc"
                            style={{
                                background: 'var(--bg)',
                                border: '1px solid var(--border)',
                                borderRadius: 14,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                gridColumn: project.featured ? 'span 2' : 'span 1',
                                transition: 'border-color 0.25s, transform 0.3s, box-shadow 0.3s',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget
                                el.style.borderColor = 'rgba(56,139,253,0.3)'
                                el.style.transform = 'translateY(-8px)'
                                el.style.boxShadow = '0 24px 80px rgba(0,0,0,0.5)'
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget
                                el.style.borderColor = 'var(--border)'
                                el.style.transform = 'translateY(0)'
                                el.style.boxShadow = 'none'
                            }}
                        >
                            {/* Visual */}
                            <div
                                style={{
                                    height: 195,
                                    background: project.visualBg,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Mesh overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage:
                                            'linear-gradient(rgba(56,139,253,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.05) 1px, transparent 1px)',
                                        backgroundSize: '26px 26px',
                                        animation: 'ms 20s linear infinite',
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: '3rem',
                                        filter: 'drop-shadow(0 0 18px rgba(56,139,253,0.4))',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                >
                                    {project.emoji}
                                </span>
                                {/* Badge */}
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: 14,
                                        right: 14,
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.55rem',
                                        padding: '4px 10px',
                                        borderRadius: '999px',
                                        zIndex: 1,
                                        ...project.badgeStyle,
                                    }}
                                >
                                    {project.badge}
                                </span>
                            </div>

                            {/* Body */}
                            <div style={{ padding: '24px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div
                                    style={{
                                        fontFamily: 'var(--font-outfit)',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        color: 'var(--white)',
                                    }}
                                >
                                    {project.title}
                                </div>
                                <p
                                    style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--muted)',
                                        lineHeight: 1.75,
                                        fontWeight: 300,
                                        flex: 1,
                                    }}
                                >
                                    {project.description}
                                </p>
                                {/* Stack */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                                    {project.stack.map((s) => (
                                        <span
                                            key={s}
                                            style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '0.55rem',
                                                padding: '3px 9px',
                                                border: '1px solid var(--border)',
                                                color: 'var(--muted)',
                                                borderRadius: 4,
                                            }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > div { grid-column: span 1 !important; }
          #projects { padding: 80px 24px !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}
