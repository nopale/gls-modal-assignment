import { Suspense } from 'react'
import Modal from '../components/modal/Modal'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <h1 data-testid="about-headline">About page</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Modal id="modal-about" title="About Modal Title">
          <p>Another dialog open</p>
          <p>this Modal is on the about page</p>
          <h4>You can have headers</h4>
          <p>
            and any other content inside the component, including a{' '}
            <Link href="/">link to the homepage</Link>
          </p>
          <p>or images, like so:</p>
          <Image
            src="https://picsum.photos/200/300"
            alt="placeholder image"
            width="200"
            height="300"
          />
        </Modal>
      </Suspense>

      <Link href="about/?modal=modal-about">
        <button>Open modal</button>
      </Link>
    </main>
  )
}
