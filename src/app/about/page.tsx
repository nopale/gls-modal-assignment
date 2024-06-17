import { Suspense } from 'react'
import Modal from '../components/modal/Modal'
import Link from 'next/link'

export default function About() {
  return (
    <main>
      <h1 data-testid="about-headline">About page</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Modal title="About Modal Title">
          <p>Another dialog open</p>
          <p>this is on the about page</p>
        </Modal>
      </Suspense>

      <Link href="about/?modal=true">
        <button>Open modal</button>
      </Link>
    </main>
  )
}
