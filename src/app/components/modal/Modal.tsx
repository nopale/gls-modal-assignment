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

  if (!router) {
    return null // Or handle the absence of router context gracefully
  }

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

  return (
    <div data-testid="modal">
      <AnimatePresence>
        {isOpen && (
          <div className={styles.wrapper}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <ModalDialog
              role="dialog"
              data-testid="modal"
              aria-label="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <ModalHeader>
                <h2>{title}</h2>
              </ModalHeader>

              <ModalBody>
                <div className="content-wrapper">
                  <div className="content">{children}</div>
                </div>
              </ModalBody>

              <ModalFooter>
                <button
                  data-testid="save-button"
                  type="button"
                  onClick={() => saveModal()}
                >
                  Save
                </button>

                <Link href={pathname}>
                  <button
                    data-testid="close-button"
                    className='close-button'
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </Link>
              </ModalFooter>
            </ModalDialog>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
