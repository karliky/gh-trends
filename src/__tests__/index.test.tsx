import '@testing-library/jest-dom';

import { buildItemMockWithId, buildRepositoriesMock } from '@/__tests__/__mocks__';
import Home from '@/pages/index';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders the home with no items', () => {
    render(<Home repositories={buildRepositoriesMock()} />)

    const heading = screen.getByRole('heading', {
      name: /Hottest GitHub Trends/i,
    })

    expect(heading).toBeInTheDocument()
    expect(screen.queryByTestId('repositories')).not.toBeInTheDocument()
  })

  it('renders the home with items', () => {
    const repositories = buildRepositoriesMock([buildItemMockWithId(1), buildItemMockWithId(2)])

    render(<Home repositories={repositories} />)
    expect(screen.queryByTestId('repositories')).toBeInTheDocument()
  })
})