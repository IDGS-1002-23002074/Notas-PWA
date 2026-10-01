import React from 'react';
import { Button } from '../../../components/ui/Button';

export const NoteItem = ({ note, onToggle, onDelete }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        marginBottom: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
        <input
          type="checkbox"
          checked={note.completed}
          onChange={() => onToggle(note.id)}
          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
        />
        <span
          style={{
            textDecoration: note.completed ? 'line-through' : 'none',
            color: note.completed ? '#94a3b8' : '#0f172a',
            fontSize: '14px',
          }}
        >
          {note.title}
        </span>
      </div>
      <Button variant="danger" size="sm" onClick={() => onDelete(note.id)}>
        ×
      </Button>
    </div>
  );
};