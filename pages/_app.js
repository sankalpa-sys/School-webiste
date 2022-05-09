import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  <NextNProgress startPosition={0.1}
  stopDelayMs={500} color = "red" />
  return <Component {...pageProps} />
}

export default MyApp
