'use client'

import Link from 'next/link'
import styles from './Modal.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from './modal.styles'
import { useEffect, useRef } from 'react'

interface ModalProps {
  id: string
  title: string
  isOpen?: boolean
  children: React.ReactNode
  onClose?: () => void
  onSave?: () => void
}

export default function Modal({
  id,
  title,
  children,
  isOpen,
  onClose,
  onSave,
}: ModalProps) {
  // we are going to use searchParams to handle the modal state
  const searchParams = useSearchParams()

  // if params contain modal with the specific id, then we open the modal component, otherwise close it
  if (searchParams) {
    isOpen = searchParams.get('modal') === id
  } else {
    isOpen = isOpen
  }

  // current pathname
  const pathname = usePathname()
  const router = useRouter()
  // assigning refs to elements to handle focus
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const saveRef = useRef<HTMLButtonElement | null>(null)

  const closeModal = () => {
    // closing the modal programmatically without Link
    if (onClose) {
      onClose()
    }
    router.push(pathname)
  }

  const saveModal = () => {
    // closing the modal programmatically without Link
    if (onSave) {
      onSave()
    }
    router.push(pathname)
  }

  // closing the modal with the ESC key
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    if (isOpen) {
      // showing the native dialog
      modalRef.current?.showModal()
      // blocking scroll when the modal is open
      document.body.classList.add('no-scroll')

      document.addEventListener('keydown', handleKeyDown)
    } else {
      modalRef.current?.close()
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <dialog
            ref={modalRef}
            role="dialog"
            data-testid="modal"
            data-open
            aria-label="modal"
            aria-labelledby="title"
            aria-describedby="description"
            className={styles.wrapper}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className={styles.overlay}
              onClick={closeModal}
            />
            <ModalDialog
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <ModalHeader role="title" aria-label="title">
                <h2 id="title">{title}</h2>
              </ModalHeader>

              <ModalBody>
                <div className="content-wrapper">
                  <div className="content" id="description" role="description">
                    {children}
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <button
                  ref={saveRef}
                  data-testid="save-button"
                  aria-label="save and close the dialog"
                  type="button"
                  onClick={() => saveModal()}
                >
                  Save
                </button>

                <Link
                  href={pathname}
                  role="button"
                  aria-label="close the dialog"
                >
                  <button
                    ref={closeRef}
                    data-testid="close-button"
                    aria-label="close the dialog"
                    className="close-button"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </Link>
              </ModalFooter>
            </ModalDialog>
          </dialog>
        )}
      </AnimatePresence>
    </>
  )
}
