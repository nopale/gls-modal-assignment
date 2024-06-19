import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'
import { expect, jest, test } from '@jest/globals'
// import { useRouter } from 'next/router'
import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// setup a new mocking function for push method
const pushMock = jest.fn()

// mock a return value on useRouter
useRouter.mockReturnValue({
  query: {},
  // return mock for push method
  push: pushMock,
  // ... add the props or methods you need
})

describe('Homepage', () => {
  it('renders the homepage correctly', () => {
    // useRouter.mockImplementationOnce(() => ({
    //   pathname: '/',
    //   query: '',
    //   asPath: '/',
    // }))
    // useRouter.mockImplementationOnce(() => ({}))
    render(<Home />)
    expect(screen.getByTestId('headline')).toBeInTheDocument()
  })
})
