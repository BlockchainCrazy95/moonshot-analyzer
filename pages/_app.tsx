import { useEffect } from 'react';
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from 'react-modal';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  goerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { APIProvider } from '../contexts/APIContext';

const { chains, publicClient } = configureChains(
  [goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'test app',
  projectId: 'ca4b5a2da050854b39f3fb4bdc848c53',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <APIProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </WagmiConfig>
    </APIProvider>
  );
}

export default MyApp;
