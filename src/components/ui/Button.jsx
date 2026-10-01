import React from 'react';

export const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md' }) => {
  const baseStyle = {
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variants = {
    primary: { backgroundColor: '#2563eb', color: '#ffffff' },
    secondary: { backgroundColor: '#e2e8f0', color: '#334155' },
    danger: { backgroundColor: '#ef4444', color: '#ffffff' },
  };

  const sizes = {
    sm: { padding: '4px 8px', fontSize: '12px' },
    md: { padding: '10px 16px', fontSize: '14px' },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...sizes[size] }}
    >
      {children}
    </button>
  );
};