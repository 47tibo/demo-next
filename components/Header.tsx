import Head from 'next/head'
import React from 'react'

type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
)

export default Header
