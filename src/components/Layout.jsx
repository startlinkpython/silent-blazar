import React from 'react';

const Layout = ({ children }) => {
    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <header style={{
                marginBottom: '4rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, var(--accent-primary), #a855f7)',
                        borderRadius: '8px'
                    }}></div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.025em' }}>PrecioPro</h1>
                </div>
                <nav>
                    <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Beta v1.0</a>
                </nav>
            </header>

            <main style={{ flex: 1 }}>
                {children}
            </main>

            <footer style={{
                marginTop: '4rem',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <p>© {new Date().getFullYear()} PrecioPro. Tu estratega de precios inteligente.</p>
            </footer>
        </div>
    );
};

export default Layout;
