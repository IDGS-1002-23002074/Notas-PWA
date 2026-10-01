const STORAGE_KEY = 'quicknotes_pwa_data';

export const getStoredNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error leyendo LocalStorage', error);
    return [];
  }
};

export const saveStoredNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error guardando en LocalStorage', error);
  }
};