import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../src/app/page'

// sample test to see if the homepage renders correctly
describe('Homepage renders', () => {
  test('The homepage renders correctly', () => {
    render(<Home />)
  })
})
