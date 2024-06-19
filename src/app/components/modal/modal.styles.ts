import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ModalDialog = styled(motion.div)`
  position: relative;
  display: block;
  width: 500px;
  height: auto;
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid #ffffff;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const ModalHeader = styled.header`
  width: 100%;
  padding: 1rem 1rem;
  border-bottom: 1px solid #ffffff;

  h2 {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: var(--font-mono);
    color: #ffffff;
  }
`

export const ModalBody = styled.div`
  padding: 0 1rem;
  margin: 2rem 0;
  height: 250px;
  padding-bottom: 4rem;
  overflow: hidden;
  color: #ffffff;

  .content-wrapper {
    position: relative;
    height: 100%;
    overflow: auto;

    .content {
      position: relative;
      height: auto;
      padding-bottom: 4rem;

      h3,
      h4,
      h5,
      h6 {
        margin-bottom: 0.2rem;
        margin-top: 1.3rem;
      }

      p {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 5rem;
  }
`

export const ModalFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: stretch;
  gap: 1rem;
  background-color: var(--background);
  border-top: 1px solid #ffffff;
  border-radius: 0 0 8px 8px;
  padding: 1rem;

  button {
    display: inline-block;
    margin-top: 0;
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: var(--font-mono);
    cursor: pointer;

    &.close-button {
      background-color: grey;
    }
  }

  a {
    display: inline-block;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    button {
      margin-top: 0;
    }
  }
`
