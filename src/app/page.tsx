import { Suspense } from 'react'
import Modal from './components/modal/Modal'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 data-testid="headline">Homepage</h1>

      <p>
        Get started by editing <code>src/app/page.tsx</code>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Modal title="Modal Title">
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

      <Link href="/?modal=true">
        <button>Open modal</button>
      </Link>
    </main>
  )
}
