export const useRouter = jest.fn(() => ({
  pathname: '/',
  query: {},
  asPath: '/',
  push: jest.fn().mockResolvedValue(true), // Mock necessary methods like push if your component uses them
}))
