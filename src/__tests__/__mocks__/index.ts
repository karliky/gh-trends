import { Item, Repositories } from '@/types';

export const buildRepositoriesMock = (items: Item[] = []): Repositories => {
    return {
        items,
        total_count: 0,
        incomplete_results: false,
    }
}

export const buildItemMockWithId = (id: number, stargazers_count: number = 0): Item => {
    return {
        id,
        name: 'test',
        full_name: 'test',
        description: 'test',
        language: 'test',
        stargazers_count,
        forks: 1,
        owner: {
            login: 'test',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        },
    }
}