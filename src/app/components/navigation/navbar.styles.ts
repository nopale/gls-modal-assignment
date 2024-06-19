import styled from 'styled-components'

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  color: white;
  background-color: var(--background);
  font-size: 1.2rem;
  border-bottom: 1px solid #ffffff;

  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    margin-right: 1rem;

    font-family: var(--font-mono);
    text-transform: uppercase;
    font-size: 14px;

    transition: color 0.2s;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`
