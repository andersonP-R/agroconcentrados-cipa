import Head from "next/head";

export const SEOProducts = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Agroconcentrados Cipa`}</title>
      <meta
        name="description"
        content={`Venta de concentrados y sales mineralizadas para ${title} con asesoria personalizada y productos de calidad`}
      />
    </Head>
  );
};
