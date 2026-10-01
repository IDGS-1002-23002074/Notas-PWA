import React from 'react';
import { NotesModule } from '../features/notes';

export const NotesPage = () => {
  return (
    <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <header style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '22px', color: '#1e293b' }}>QuickNotes PWA</h1>
        
      </header>

      <NotesModule />
    </div>
  );
};