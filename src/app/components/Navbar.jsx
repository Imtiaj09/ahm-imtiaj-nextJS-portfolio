import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <div>
            <Link href={"/"}>Logo</Link>
            <div className='manu'></div>
        </div>
    </nav>
  )
}

export default Navbar