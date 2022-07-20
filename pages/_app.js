import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import { Layout } from '../Components'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
