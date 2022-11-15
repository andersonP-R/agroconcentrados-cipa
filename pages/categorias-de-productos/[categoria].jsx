import Head from "next/head";
import { Layout } from "../../components/layouts";
import { categorias } from "../../sections/productosPage/ProductsSection";

const CategoriaPage = ({ categoria }) => {
  if (categoria === "especies-menores") {
    const newCategorie = categoria.split("-").join(" ");
    console.log(newCategorie);
  }

  return (
    <Layout title={`Concentrados para ${categoria} | Agroconcentrados Cipa`}>
      <Head>
        <meta
          name="description"
          content={`Venta de concentrados y sales mineralizadas para el sector de ${categoria}, asesoría personalizada con productos de calidad`}
        />
      </Head>
      <h1>Esta es la pagina de {categoria}</h1>
      {categoria}
    </Layout>
  );
};

export const getStaticPaths = async (ctx) => {
  const categoriasDeProductos = categorias.map((categoria) => categoria.url);

  return {
    paths: categoriasDeProductos.map((categoria) => ({
      params: { categoria },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { categoria } = params;

  return {
    props: {
      categoria: categoria,
    },
  };
};

export default CategoriaPage;
