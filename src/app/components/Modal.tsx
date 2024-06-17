'use client'

import { useSearchParams } from 'next/navigation'

// specifying customizable props for modal component
interface ModalProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  onSave: () => void
}

export default function Modal({
  title,
  children,
  onClose,
  onSave,
}: ModalProps) {
  // we are going to use searchParams to handle the modal state
  const searchParams = useSearchParams()
  const isOpen = searchParams.has('modal')

  return (
    <>
      {isOpen && (
        <div className="wrapper">
          <div className="overlay"></div>
          <dialog>
            <header>
              <h2>{title}</h2>
            </header>

            <div>{children}</div>

            <div>
              <button onClick={onClose}>Cancel</button>
              <button onClick={onSave}>Save</button>
            </div>
          </dialog>
        </div>
      )}
    </>
  )
}
