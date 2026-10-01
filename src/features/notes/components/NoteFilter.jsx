import React from 'react';
import { Button } from '../../../components/ui/Button';

export const NoteFilter = ({ currentFilter, onFilterChange }) => {
  const options = [
    { key: 'all', label: 'Todas' },
    { key: 'pending', label: 'Pendientes' },
    { key: 'completed', label: 'Completadas' },
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      {options.map((opt) => (
        <Button
          key={opt.key}
          size="sm"
          variant={currentFilter === opt.key ? 'primary' : 'secondary'}
          onClick={() => onFilterChange(opt.key)}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
};