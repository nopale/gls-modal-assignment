import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'
import { expect, jest, test } from '@jest/globals'

// as first test, make sure the homepage renders correctly
describe('Homepage', () => {
  it('renders the homepage correctly', () => {
    render(<Home />)
    // check if all components are rendered
    expect(screen.getByTestId('headline')).toBeInTheDocument()
  })
})
