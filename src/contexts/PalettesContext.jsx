import { createContext, useContext, useState } from 'react';

const PalettesContext = createContext();

export function PalettesContextProvider({ children }) {

  const [palettes, setPalettes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  return (
    <PalettesContext.Provider value={{ palettes, setPalettes, filter, setFilter, search, setSearch }}>
      { children }
    </PalettesContext.Provider>
  );
}

export function usePalettesContext() {
  return useContext(PalettesContext);
}

export default PalettesContextProvider;
