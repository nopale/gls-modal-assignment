// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import { expect, jest, test } from '@jest/globals'
// import Modal from '../src/app/components/modal/Modal'

// describe('Modal Component', () => {

//   // First test: testing if the modal component is rendered correctly when isOpen is true
//   test('Modal renders correctly when open', () => {
//     render(
//       <Modal title="Test Modal" isOpen={true}>
//         <p>Test Content</p>
//       </Modal>
//     )

//     // Assert that the modal dialog is rendered
//     expect(screen.getByTestId('modal')).toBeInTheDocument()
//     // Assert that the modal title is rendered
//     expect(screen.getByText('Test Modal')).toBeInTheDocument()
//     // Assert that the modal content is rendered
//     expect(screen.getByText('Test Content')).toBeInTheDocument()
//   })

//   // Second test: testing if the modal calls onClose function correctly when close button is clicked
//   test('calls onClose when close button is clicked', () => {
//     const handleClose = jest.fn()

//     render(
//       <Modal title="Test Modal" isOpen={true} onClose={handleClose}>
//         <p>Test Content</p>
//       </Modal>
//     )

//     // Simulate click on the close button
//     const closeButton = screen.getByTestId('close-button')
//     expect(closeButton).toBeInTheDocument()
//     fireEvent.click(closeButton)

//     // confirm that onClose callback is called
//     expect(handleClose).toHaveBeenCalled()
//   })

//   // Third test: testing if the modal calls onSave function correctly when save button is clicked
//   test('calls onSave when save button is clicked', () => {
//     const handleSave = jest.fn()

//     render(
//       <Modal title="Test Modal" isOpen={true} onSave={handleSave}>
//         <p>Test Content</p>
//       </Modal>
//     )

//     // Simulate click on the save button
//     const saveButton = screen.getByTestId('save-button')
//     expect(saveButton).toBeInTheDocument()
//     fireEvent.click(saveButton)

//     // confirm that onSave callback is called
//     expect(handleSave).toHaveBeenCalled()
//   })
// })
