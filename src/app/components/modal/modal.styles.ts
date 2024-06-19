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
  /* 
  .content-wrapper {
    padding: 1rem;
    max-height: 200px;
    overflow: hidden;

    .content {
      position: relative;
      overflow-y: auto;
    }
  } */
`

export const ModalHeader = styled.header`
  width: 100%;
  padding: 1rem 1rem;
  border-bottom: 1px solid #ffffff;

  h2 {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: var(--font-mono);
  }
`

export const ModalBody = styled.div`
  padding: 0 1rem;
  margin: 2rem 0;
  height: 200px;
  padding-bottom: 4rem;
  overflow: hidden;

  .content-wrapper {
    position: relative;
    height: 100%;
    overflow: auto;

    .content {
      position: relative;
      height: auto;

      p {
        margin-bottom: 1rem;
      }
    }
  }
`

export const ModalFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 1rem;
  padding: 1rem;

  button {
    display: inline-block;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: var(--font-mono);
    cursor: pointer;

    &.close-button {
      background-color: grey;
    }
  }
`
