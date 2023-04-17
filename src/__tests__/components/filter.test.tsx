import '@testing-library/jest-dom';

import { ReactNode } from 'react';
import { act } from 'react-dom/test-utils';

import { buildItemMockWithId, buildRepositoriesMock } from '@/__tests__/__mocks__';
import Filter from '@/components/header/filter';
import { FavoritesContextProvider, useFavorites } from '@/context/favoritesContext';
import { render, renderHook, screen } from '@testing-library/react';

describe('Filter', () => {
    it('renders the component with no badge count as we have not added to favorites yet', () => {
        render(<Filter 
            setRepositories={jest.fn()} 
            repositoryList={buildRepositoriesMock()} 
        />)
        const favoritesBadge = screen.queryByTestId('favorites-badge')
        expect(favoritesBadge).not.toBeInTheDocument()
    })

    it('renders the component with badge count as we have added to favorites', () => {
        const wrapper = ({ children }: { children: ReactNode }) => <FavoritesContextProvider>{children}</FavoritesContextProvider>
        const { result } = renderHook(() => useFavorites(), { wrapper })
        act(() => {
            result.current.addFavorite(buildItemMockWithId(1))
        })
        render(<Filter 
            setRepositories={jest.fn()} 
            repositoryList={buildRepositoriesMock()} 
        />, { wrapper })
        const favoritesBadge = screen.queryByTestId('favorites-badge')
        expect(favoritesBadge).toBeInTheDocument()
        expect(favoritesBadge).toHaveTextContent('1')
    })
    
})
