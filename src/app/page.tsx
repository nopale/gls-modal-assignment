import { Suspense } from 'react'
import Modal from './components/modal/Modal'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  async function onCloseModal() {
    // using server actions to keep the page component server side
    'use server'
    console.log('Modal has closed')
  }

  async function onSaveModal() {
    // using server actions to keep the page component server side
    'use server'
    console.log('Save button was clicked')
  }

  return (
    <main>
      <h1 data-testid="headline">Homepage</h1>

      <p>
        Welcome to the homepage! This is a sample page showcasing a custom Modal
        component that can feature several instances, and can be opened from
        anywhere with a link.
      </p>

      <p>
        Try the buttons below to open two different modals. You can also open
        the first by clicking here:
        <Link href="/?modal=modal1">Open first modal</Link>, and the second by
        clicking here: <Link href="/?modal=modal2">Open second modal</Link>.
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Modal
          id="modal1"
          title="First Homepage Modal"
          onSave={onSaveModal}
          onClose={onCloseModal}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl in tincidunt tincidunt, nunc nunc lacinia nunc, id
            lacinia nunc nunc in nunc. Nulla facilisi. Sed euismod, nisl nec
            aliquet ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec
            nisl. Sed id nisl auctor, aliquet justo id, aliquet nisl. Sed id
            nisl auctor, aliquet justo id, aliquet nisl.
          </p>
          <p>
            Curabitur auctor, nisl in tincidunt tincidunt, nunc nunc lacinia
            nunc, id lacinia nunc nunc in nunc. Nulla facilisi. Sed euismod,
            nisl nec aliquet ultrices, nisl nisl aliquam nisl, nec aliquam nisl
            nisl nec nisl. Sed id nisl auctor, aliquet justo id, aliquet nisl.
            Sed id nisl auctor, aliquet justo id, aliquet nisl.
          </p>
        </Modal>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Modal
          title="Second Homepage Modal"
          onSave={onSaveModal}
          onClose={onCloseModal}
          id="modal2"
        >
          <p>
            Curabitur auctor, nisl in tincidunt tincidunt, nunc nunc lacinia
            nunc, id lacinia nunc nunc in nunc. Nulla facilisi. Sed euismod,
            nisl nec aliquet ultrices, nisl nisl aliquam nisl, nec aliquam nisl
            nisl nec nisl. Sed id nisl auctor, aliquet justo id, aliquet nisl.
            Sed id nisl auctor, aliquet justo id, aliquet nisl.
          </p>

          <Image
            src="https://picsum.photos/200/300"
            alt="placeholder image"
            width="200"
            height="300"
          />
        </Modal>
      </Suspense>

      <div className='buttons-container'>
        <Link href="/?modal=modal1">
          <button>Open modal</button>
        </Link>

        <Link href="/?modal=modal2">
          <button>Open second modal</button>
        </Link>
      </div>
    </main>
  )
}
