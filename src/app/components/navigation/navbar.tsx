'use client'

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <ul>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </ul>
  )
}
