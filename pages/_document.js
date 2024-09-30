import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  const background = process.env.NEXT_PUBLIC_BG_RGBA
  return (
    <Html
      lang="en"
      style={
        background
          ? {
              "--background-start-rgb": background,
              "--background-end-rgb": background,
            }
          : {
              position: "relative",
            }
      }
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
