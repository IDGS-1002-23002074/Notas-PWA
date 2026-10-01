import { useState, useEffect } from 'react';
import { getStoredNotes, saveStoredNotes } from '../api/notesStorage';

export const useNotes = () => {
  const [notes, setNotes] = useState(() => getStoredNotes());
  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'completed'

  useEffect(() => {
    saveStoredNotes(notes);
  }, [notes]);

  const addNote = (title) => {
    if (!title.trim()) return;
    const newNote = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toLocaleDateString('es-ES'),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const toggleNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => {
    if (filter === 'pending') return !note.completed;
    if (filter === 'completed') return note.completed;
    return true;
  });

  return {
    notes: filteredNotes,
    totalCount: notes.length,
    filter,
    setFilter,
    addNote,
    toggleNote,
    deleteNote,
  };
};