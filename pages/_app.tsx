import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Head from 'next/head';
import { Montserrat } from '@next/font/google'
import { NotificationsProvider } from '@mantine/notifications';

const montserrat = Montserrat({ subsets: ['latin'] })

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.goerli,
  ],
  [
    alchemyProvider({
      apiKey: '31mq0sub7ovmCA3yBNP6zoPVI-hyBm9g',
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <main className={montserrat.className}>
    <Head>
      <meta name="author" content="Piotr Gerke"/>
      <title>Retail Revolution</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} 
              theme={darkTheme({
                accentColor: '#356EFF',
                accentColorForeground: 'white',
                borderRadius: 'medium',
              })}>
                <NotificationsProvider>
                      <Component {...pageProps} />
                </NotificationsProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  );
}

export default MyApp;