// components/Footer.tsx
export default function Footer() {
    return (
        <footer
            style={{
                padding: '30px 64px',
                borderTop: '1px solid var(--bd2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
                flexWrap: 'wrap',
                gap: '12px',
            }}
        >
            <span
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                }}
            >
                © 2026{' '}
                <span style={{ color: 'var(--a1)' }}>Siddharth Parekh</span>
                . All Rights Reserved.
            </span>
            <span
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                }}
            >
                AI &amp; Mobile Engineer ·{' '}
                <span style={{ color: 'var(--a1)' }}>India</span>
            </span>
        </footer>
    )
}
