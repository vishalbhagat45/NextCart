// pages/_app.js

import '../styles/globals.css' // This links your Tailwind styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
