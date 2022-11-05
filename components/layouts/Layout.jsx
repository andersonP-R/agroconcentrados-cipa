import Head from "next/head";
import { Nav2 } from "../ui/nav";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Agroconcentrados Cipa"}</title>
        <meta name="author" content="Agroconcentrados Cipa" />
        <meta
          name="description"
          content="Venta de concentrados y sales mineralizadas, asesoría personalizada y todos los productos que requiera para su necesidad"
        />
      </Head>

      <Nav2 />

      <main>{children}</main>
    </>
  );
};
