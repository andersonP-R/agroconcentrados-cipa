import { Layout } from "../components/layouts";
import {
  CategoriasSection,
  CotizacionSection,
  Hero,
  ProductSection,
  ResultadosGarantizadosSection,
} from "../sections/homePage";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <ProductSection />
      <CotizacionSection />
      <ResultadosGarantizadosSection />
      <CategoriasSection />
    </Layout>
  );
};

export default HomePage;
