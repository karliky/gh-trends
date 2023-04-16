import { Repositories } from '@/types';

const date = new Date();
date.setDate(date.getDate() - 7);
const SEVEN_DAYS_AGO = date.toISOString().split('T')[0]
const API_URL = 'https://api.github.com/search/repositories?q=created:>'+ SEVEN_DAYS_AGO +'&sort=stars&order=desc';

export default async function fetchRepos(q?: string): Promise<Repositories> {
  return fetch(API_URL + q)
    .then(response => response.json())
    .then(data => data as Repositories);
}