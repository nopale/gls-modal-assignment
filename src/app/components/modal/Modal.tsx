'use client'

import Link from 'next/link'
import styles from './Modal.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

// specifying customizable props for modal component
interface ModalProps {
  title: string
  children: React.ReactNode
  onClose?: () => void
  onSave?: () => void
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
  const pathname = usePathname()

  const router = useRouter()

  const closeModal = () => {
    router.push(pathname)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className={styles.wrapper}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <motion.dialog
              className={styles.container}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <header>
                <h2>{title}</h2>
              </header>

              <div>{children}</div>

              <div>
                <Link href={pathname}>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </Link>

                <button
                  type="button"
                  className="bg-red-500 text-white p-2"
                  onClick={onSave}
                >
                  Save
                </button>
              </div>
            </motion.dialog>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
