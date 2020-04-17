import React from 'react';
import '../styles/main.css';
import { AppProps } from 'next/app'

const Pebblo = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default Pebblo;