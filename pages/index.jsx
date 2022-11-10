import { Layout } from "../components/layouts";
import {
  CategoriasSection,
  CotizacionSection,
  Hero,
  ProductSection,
  QuoteSection,
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
      <QuoteSection />
    </Layout>
  );
};

export default HomePage;
