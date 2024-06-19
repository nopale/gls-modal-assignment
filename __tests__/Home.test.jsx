import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'
import { expect, jest, test } from '@jest/globals'
import { useRouter } from 'next/router'
import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

describe('Homepage', () => {
  it('renders the homepage correctly', () => {
    // useRouter.mockImplementationOnce(() => ({
    //   pathname: '/',
    //   query: '',
    //   asPath: '/',
    // }))
    mockRouter.push('/')
    render(<Home />, { wrapper: MemoryRouterProvider })
    expect(screen.getByTestId('headline')).toBeInTheDocument()
  })
})




