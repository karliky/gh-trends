import { createContext, useContext, useState } from 'react';

import { Sections } from '@/types';

type FiltersContextType = {
  activeTab: string;
  currentLanguage: string;
  setActiveTab: Function;
  setcurrentLanguage: Function;
}

const FiltersContext = createContext<FiltersContextType>({
  activeTab: 'trending',
  currentLanguage: 'All',
  setActiveTab: () => {},
  setcurrentLanguage: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
}

export const FiltersContextProvider = ({ children }: ProviderProps) => {
  const [activeTab, setActiveTab] = useState('trending' as Sections)
  const [currentLanguage, setcurrentLanguage] = useState<string>("All");

  return (
    <FiltersContext.Provider value={{ 
      activeTab, 
      setActiveTab, 
      currentLanguage, 
      setcurrentLanguage
    }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);