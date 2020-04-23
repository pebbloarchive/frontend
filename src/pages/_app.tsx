import React from 'react';
import '../styles/main.css';
import { AppProps } from 'next/app'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const Pebblo = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default Pebblo;