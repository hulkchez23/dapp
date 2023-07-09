import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { Html, Head, Main, NextScript } from 'next/document'

import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { avalanche, goerli, mainnet, optimism } from 'wagmi/chains'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { SafeConnector } from 'wagmi/connectors/safe'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, optimism, avalanche],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY! }),
    publicProvider(),
  ],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? '',
      },
    }),
    new WalletConnectLegacyConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new LedgerConnector({
      chains,
      options: {
        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? '',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: (detectedName) =>
          `Injected (${
            typeof detectedName === 'string'
              ? detectedName
              : detectedName.join(', ')
          })`,
        shimDisconnect: true,
      },
    }),
    new SafeConnector({
      chains,
      options: {
        allowedDomains: [/https:\/\/app.safe.global$/],
        debug: false,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextHead>
        <title>Dapp</title>
      </NextHead>
     <style jsx global>{`
        div{
        }
        #__next{
        }
        body{
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        #sendTxn{
          padding: 20px;
          background: #73e600;
          width: 20vw;
          margin: 0px auto;
          float: none;
          display: block;
          text-align: center;
          font-weight: bold;
          font-family: sans-serif;
          border-radius: 6px;
          color: #000000b0;
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #sendTxn button{
          padding: 20px 40px;
          background: black;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>

      <WagmiConfig config={config}>
        <Component {...pageProps} id="btns"/>
      </WagmiConfig>
      <script src="../action.js" />

    </>
  )
}

export default App
