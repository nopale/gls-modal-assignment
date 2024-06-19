import styled from 'styled-components'

export const ProductGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  div {
    background: #333333;
    width: 100%;
    height: 200px;
  }
`
