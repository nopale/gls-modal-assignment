'use client'

import { Suspense } from 'react'
import Modal from '../components/modal/Modal'
import Link from 'next/link'
import Image from 'next/image'
import { ProductGrid } from './category.styles'

export default function CategoryPage() {
  // mocking a product array
  const items = Array.from({ length: 18 }, (_, i) => i + 1)

  return (
    <main>
      <h1 data-testid="category-headline">This is a Product Category Page </h1>

      <Link href="categorypage/?modal=modal-category">
        <button>Open category page modal</button>
      </Link>

      <ProductGrid>
        {items.map((item) => (
          <div key={item}/>
        ))}
      </ProductGrid>

      <Suspense fallback={<div>Loading...</div>}>
        <Modal id="modal-category" title="Category Modal Title">
          <p>Another dialog open</p>
          <p>this Modal is on a product category page</p>
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
    </main>
  )
}
