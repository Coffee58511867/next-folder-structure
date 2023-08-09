'use client'

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.linksContainer}>
        <Link href='/pages/register' >About Us</Link>
        <Link href='/pages/Login' >Login</Link>
        <Link href='/pages/register'>Register</Link>
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '8px 16px',
    border: '1px solid white',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default Header;
