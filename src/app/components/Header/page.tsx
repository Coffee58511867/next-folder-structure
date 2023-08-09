import React from 'react'
import Link from 'next/link'
import "../../styles/Header.css"

const Header = () => {
  return (
    <div>
      <div style={{ padding: 10, fontSize: 23, margin: 10}}>
        <Link href='/pages/register'>About Us</Link>
        <Link href='/pages/Login'>Login</Link>
        <Link href='/pages/register'>Register</Link>
      </div>
    </div>
  )
}

export default Header
