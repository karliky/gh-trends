import '@testing-library/jest-dom';

import { act } from 'react-dom/test-utils';

import { buildItemMockWithId, buildRepositoriesMock } from '@/__tests__/__mocks__';
import RepositoryList from '@/components/repositoryList';
import { FavoritesContextProvider } from '@/context/favoritesContext';
import { render, screen } from '@testing-library/react';

describe('RepositoryList', () => {
    it('renders the component with the loading spinner', () => {
        render(<RepositoryList repositories={buildRepositoriesMock()} isLoading={true} />)
        const spinner = screen.getByTestId('spinner')
        expect(spinner).toBeInTheDocument()
    })
    it('renders the component with no items', () => {
        render(<RepositoryList repositories={buildRepositoriesMock()} isLoading={false} />)
        const noItems = screen.getByText('No repositories found.')
        expect(noItems).toBeInTheDocument()
    })
    
    it('renders the component with two items', () => {
        const first_stargazers_count = 2;
        const second_stargazers_count = 33;
        const repositories = buildRepositoriesMock([
            buildItemMockWithId(1, first_stargazers_count),
            buildItemMockWithId(2, second_stargazers_count),
        ])
        render(<RepositoryList repositories={repositories} isLoading={false} />)

        const firstItem = screen.getByTestId('stargazers_count-0')
        expect(firstItem).toHaveTextContent('2')

        const secondItem = screen.getByTestId('stargazers_count-1')
        expect(secondItem).toHaveTextContent('33')
    })
    it('RepositoryList has two item that is added to favorites', () => {
        const repositories = buildRepositoriesMock([
            buildItemMockWithId(1),
            buildItemMockWithId(2),
        ])
        render(<FavoritesContextProvider><RepositoryList repositories={repositories} isLoading={false} /></FavoritesContextProvider>)

        const bookmark = screen.getByTestId('bookmark-0')
        expect(bookmark).toHaveAttribute('src', '/bookmark.svg')
        act(() => {
            bookmark.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        expect(screen.getByTestId('bookmark-0')).toHaveAttribute('src', '/bookmark_marked.svg')
        expect(screen.getByTestId('bookmark-1')).toHaveAttribute('src', '/bookmark.svg')

        expect(JSON.parse(localStorage.getItem('favorites')!).length).toEqual(1)
    })
})