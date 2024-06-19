import { describe, test, vi, expect } from 'vitest'
import { act, screen } from '@testing-library/react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '../src/app/components/modal/Modal'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useRef } from 'react'
import React from 'react'

// see if the Modal component renders correctly
describe('Modal component', () => {
  test('Modal renders correctly', () => {
    render(
      <Modal id="modal-test" title="Test Modal Title">
        <p>Test Modal Content</p>
      </Modal>
    )
  })

  test('Modal renders correctly when URL search params contain ?modal=modal-id', () => {
    // Mock the URL search params to contain ?modal=modal-id
    const modalOpen = vi
      .mocked(useSearchParams)
      .mockReturnValue(new ReadonlyURLSearchParams('modal=modal-test'))

    modalOpen()

    render(
      <Modal id="modal-test" title="Test Modal Title" isOpen={true}>
        <p>Test Modal Content</p>
      </Modal>
    )
  })
})
