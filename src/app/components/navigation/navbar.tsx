'use client'

import Link from 'next/link'
import React from 'react'
import { NavBar } from './navbar.styles'

export default function Navbar() {
  return (
    <NavBar>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/categorypage">Products</Link>
    </NavBar>
  )
}
