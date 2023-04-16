import { useEffect, useState } from 'react';

import fetchRepos from '@/api/github';
import { useFilters } from '@/context/filtersContext';
import { Repositories } from '@/types';

const useRepositoryList = (defaultRepositories: Repositories) => {
  const { activeTab, currentLanguage } = useFilters();
  const [repositoryList, setRepositoryList] = useState<Repositories>(defaultRepositories);
  const [isLoading, setIsLoading] = useState(false);
  const [firstCall, setFirstCall] = useState(true);
  useEffect(() => {
    if (firstCall) return setFirstCall(false);
    if (activeTab !== "trending") return;
    setIsLoading(true);
    if (currentLanguage === "All" && activeTab === "trending") {
      setRepositoryList(defaultRepositories);
      setIsLoading(false);
      return;
    }
    const q = currentLanguage === "All" ? `` : `&q=language:${currentLanguage}`;
    fetchRepos(q).then((repositories) => {
      setRepositoryList(repositories);
      setIsLoading(false);
    });
  }, [currentLanguage, activeTab]);

  return { repositoryList, isLoading, setRepositoryList, currentLanguage };
};

export default useRepositoryList;