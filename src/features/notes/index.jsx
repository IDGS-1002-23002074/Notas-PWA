import React from 'react';
import { useNotes } from './hooks/useNotes';
import { NoteForm } from './components/NoteForm';
import { NoteFilter } from './components/NoteFilter';
import { NoteItem } from './components/NoteItem';

export const NotesModule = () => {
  const { notes, totalCount, filter, setFilter, addNote, toggleNote, deleteNote } = useNotes();

  return (
    <div>
      <NoteForm onAddNote={addNote} />
      <NoteFilter currentFilter={filter} onFilterChange={setFilter} />

      {notes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '24px' }}>
          {totalCount === 0 ? 'No tienes notas. ¡Crea la primera!' : 'No hay notas en este filtro.'}
        </p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onToggle={toggleNote}
            onDelete={deleteNote}
          />
        ))
      )}
    </div>
  );
};