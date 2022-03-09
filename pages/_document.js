import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // added so example does not get confused
    <Html translate="no">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}