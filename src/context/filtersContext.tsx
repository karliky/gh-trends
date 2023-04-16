import { createContext, useContext, useState } from 'react';

import { Sections } from '@/types';

type FiltersContextType = {
  activeTab: string;
  filteredLanguage: string;
  setActiveTab: Function;
  setFilteredLanguage: Function;
}

const FiltersContext = createContext<FiltersContextType>({
  activeTab: 'trending',
  filteredLanguage: 'All',
  setActiveTab: () => {},
  setFilteredLanguage: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
}

export const FiltersContextProvider = ({ children }: ProviderProps) => {
  const [activeTab, setActiveTab] = useState('trending' as Sections)
  const [filteredLanguage, setFilteredLanguage] = useState<string>("All");

  return (
    <FiltersContext.Provider value={{ 
      activeTab, 
      setActiveTab, 
      filteredLanguage, 
      setFilteredLanguage
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);