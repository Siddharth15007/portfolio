'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const inputStyle: React.CSSProperties = {
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '13px 16px',
        fontFamily: 'var(--font-outfit)',
        fontSize: '0.9rem',
        color: 'var(--text)',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        width: '100%',
        boxSizing: 'border-box',
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = 'var(--a1)'
        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(56,139,253,0.1)'
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            })

            const data = await res.json()

            if (!res.ok) {
                setErrorMsg(data.error || 'Something went wrong.')
                setStatus('error')
                return
            }

            setStatus('success')
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.')
            setStatus('error')
        }
    }

    return (
        <section
            id="contact"
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
                    gridTemplateColumns: '1fr 1fr',
                    gap: '90px',
                    alignItems: 'start',
                }}
                className="contact-grid"
            >
                {/* Left */}
                <div className="rvl">
                    <div className="sec-label">Contact</div>
                    <h2 className="sec-h2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
                        Let&apos;s work on something<br />great together.
                    </h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '34px' }}>
                        Open to full-time roles, freelance projects, and collaborations on AI or mobile products. Feel free to reach out.
                    </p>

                    {/* Contact Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { icon: '✉️', label: 'Email', value: 'siddharthparekh40@gmail.com', href: 'mailto:siddharthparekh40@gmail.com', target: '_self' },
                            { icon: '💼', label: 'LinkedIn', value: '/in/siddharth-parekh007', href: 'https://linkedin.com/in/siddharth-parekh007/', target: '_blank' },
                            { icon: '📍', label: 'Location', value: 'India 🇮🇳', href: undefined, target: '_self' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    padding: '17px 20px',
                                    border: '1px solid var(--border)',
                                    borderRadius: 10,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.25s, background 0.25s',
                                    cursor: item.href ? 'pointer' : 'default',
                                }}
                                onClick={() => {
                                    if (item.href) window.open(item.href, item.target)
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget
                                    el.style.borderColor = 'rgba(56,139,253,0.26)'
                                    el.style.background = 'rgba(56,139,253,0.04)'
                                    const bar = el.querySelector('.ci-bar') as HTMLElement
                                    if (bar) bar.style.transform = 'scaleY(1)'
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget
                                    el.style.borderColor = 'var(--border)'
                                    el.style.background = 'transparent'
                                    const bar = el.querySelector('.ci-bar') as HTMLElement
                                    if (bar) bar.style.transform = 'scaleY(0)'
                                }}
                            >
                                {/* Left bar */}
                                <div
                                    className="ci-bar"
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: 3,
                                        background: 'linear-gradient(to bottom, var(--a1), var(--a2))',
                                        transform: 'scaleY(0)',
                                        transformOrigin: 'top',
                                        transition: 'transform 0.25s ease',
                                    }}
                                />
                                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.53rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.18em',
                                            color: 'var(--a1)',
                                            marginBottom: '3px',
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Form */}
                <form
                    className="rv"
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {/* Success banner */}
                    {status === 'success' && (
                        <div style={{
                            background: 'rgba(35, 134, 54, 0.12)',
                            border: '1px solid rgba(35, 134, 54, 0.35)',
                            borderRadius: 8,
                            padding: '14px 18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.9rem',
                            color: '#3fb950',
                        }}>
                            <span>✅</span>
                            <span>Message sent! I'll get back to you soon.</span>
                        </div>
                    )}

                    {/* Error banner */}
                    {status === 'error' && (
                        <div style={{
                            background: 'rgba(248, 81, 73, 0.1)',
                            border: '1px solid rgba(248, 81, 73, 0.3)',
                            borderRadius: 8,
                            padding: '14px 18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.9rem',
                            color: '#f85149',
                        }}>
                            <span>❌</span>
                            <span>{errorMsg}</span>
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                            ...inputStyle,
                            resize: 'vertical',
                            height: 135,
                        }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        style={{
                            alignSelf: 'flex-start',
                            background: status === 'loading'
                                ? 'rgba(56,139,253,0.4)'
                                : 'linear-gradient(135deg, var(--a1), rgba(56,139,253,0.8))',
                            color: 'var(--white)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            padding: '13px 32px',
                            borderRadius: 8,
                            border: 'none',
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                        onMouseEnter={(e) => {
                            if (status !== 'loading') {
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(56,139,253,0.4)'
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        {status === 'loading' ? (
                            <>
                                <span
                                    style={{
                                        width: 12,
                                        height: 12,
                                        border: '2px solid rgba(255,255,255,0.3)',
                                        borderTopColor: '#fff',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                        animation: 'spin 0.7s linear infinite',
                                    }}
                                />
                                Sending…
                            </>
                        ) : (
                            'Send Message →'
                        )}
                    </button>
                </form>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact { padding: 80px 24px !important; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    )
}
