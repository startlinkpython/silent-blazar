import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, name, min }) => {
    return (
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                style={{
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #334155',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = '#334155'}
            />
        </div>
    );
};

export default Input;
