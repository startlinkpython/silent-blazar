import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
    const baseStyle = {
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        border: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.4)',
        },
        secondary: {
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--text-secondary)',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--accent-primary)',
            border: '2px solid var(--accent-primary)',
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            style={{ ...baseStyle, ...variants[variant] }}
            className={className}
            onMouseOver={(e) => {
                if (variant === 'primary') e.target.style.backgroundColor = 'var(--accent-hover)';
            }}
            onMouseOut={(e) => {
                if (variant === 'primary') e.target.style.backgroundColor = 'var(--accent-primary)';
            }}
        >
            {children}
        </button>
    );
};

export default Button;
