// components/GridBg.tsx
export default function GridBg() {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                backgroundImage:
                    'linear-gradient(rgba(56,139,253,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.035) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
            }}
        />
    )
}
