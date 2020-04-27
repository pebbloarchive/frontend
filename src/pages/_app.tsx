import React from 'react';
import '../styles/main.css';
import { AppProps } from 'next/app'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../core/api';
import { AccountData } from '../core/controllers/account/account.state';

toast.configure();

const Pebblo = ({ Component, pageProps }: AppProps) => {
  if (process.browser && AccountData.token.value !== undefined) {
    Api.config.options.headers["authorization"] = `Bearer ${AccountData.token.value}`;
  }
  return <Component {...pageProps} />
}

export default Pebblo;