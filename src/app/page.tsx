import { Suspense } from 'react'
import Modal from './components/modal/Modal'
import Link from 'next/link'

export default function Home() {
  async function onCloseModal() {
    // using server actions to keep the component server side
    'use server'
    console.log('Modal has closed')
  }

  async function onSaveModal() {
    // using server actions to keep the component server side
    'use server'
    console.log('Save button was clicked')
  }

  return (
    <main>
      <h1 data-testid="headline">Homepage</h1>

      <p>
        Get started by editing <code>src/app/page.tsx</code>
      </p>

      <Modal
        id="modal1"
        title="Modal Title"
        onSave={onSaveModal}
        onClose={onCloseModal}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl in tincidunt tincidunt, nunc nunc lacinia nunc, id
          lacinia nunc nunc in nunc. Nulla facilisi. Sed euismod, nisl nec
          aliquet ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec
          nisl. Sed id nisl auctor, aliquet justo id, aliquet nisl. Sed id nisl
          auctor, aliquet justo id, aliquet nisl.
        </p>
        <p>
          Curabitur auctor, nisl in tincidunt tincidunt, nunc nunc lacinia nunc,
          id lacinia nunc nunc in nunc. Nulla facilisi. Sed euismod, nisl nec
          aliquet ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec
          nisl. Sed id nisl auctor, aliquet justo id, aliquet nisl. Sed id nisl
          auctor, aliquet justo id, aliquet nisl.
        </p>
      </Modal>

      <Link href="/?modal=modal1">
        <button>Open modal</button>
      </Link>

      <Modal
        title="Modal Title"
        onSave={onSaveModal}
        onClose={onCloseModal}
        id="modal2"
      >
        <p>
          Curabitur auctor, nisl in tincidunt tincidunt, nunc nunc lacinia nunc,
          id lacinia nunc nunc in nunc. Nulla facilisi. Sed euismod, nisl nec
          aliquet ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec
          nisl. Sed id nisl auctor, aliquet justo id, aliquet nisl. Sed id nisl
          auctor, aliquet justo id, aliquet nisl.
        </p>
      </Modal>

      <Link href="/?modal=modal2">
        <button>Open second modal</button>
      </Link>
    </main>
  )
}
