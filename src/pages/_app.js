import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  console.log('APP JS TRIGGERED');
  return <Component {...pageProps} />
}

export default MyApp
