import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
//stylized div with metadata, header, footer, children

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Caroline Hohner's portfolio" />
        <meta name="og:title" content="Caroline Hohner" />
        <meta name="og:image" content={``} />
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
