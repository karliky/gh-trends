import { useEffect, useState } from 'react';

import fetchRepos from '@/api/github';
import { useFilters } from '@/context/filtersContext';

import { Repositories } from '../types';

const useRepositoryList = (defaultRepositories: Repositories) => {
  const { activeTab, filteredLanguage } = useFilters();
  const [repositoryList, setRepositoryList] = useState<Repositories>(defaultRepositories);
  const [isLoading, setIsLoading] = useState(false);
  const [firstCall, setFirstCall] = useState(true);
  useEffect(() => {
    if (firstCall) return setFirstCall(false);
    if (activeTab !== "trending") return;
    setIsLoading(true);
    if (filteredLanguage === "All" && activeTab === "trending") {
      setRepositoryList(defaultRepositories);
      setIsLoading(false);
      return;
    }
    const q = filteredLanguage === "All" ? `` : `&q=language:${filteredLanguage}`;
    fetchRepos(q).then((repositories) => {
      setRepositoryList(repositories);
      setIsLoading(false);
    });
  }, [filteredLanguage, activeTab]);

  return { repositoryList, isLoading, setRepositoryList };
};

export default useRepositoryList;