import React, { useState } from 'react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

export const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe una nueva nota o tarea..."
      />
      <Button type="submit" variant="primary">Guardar</Button>
    </form>
  );
};