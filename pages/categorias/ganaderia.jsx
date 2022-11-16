import { Layout } from "../../components/layouts";
import { SEOProducts } from "../../components/ui";
import {
  GanaderiaProductSection,
  HeroGanaderia,
} from "../../sections/categorias-de-productos/ganaderiaPage";

const GanaderiaPage = () => {
  return (
    <Layout>
      <SEOProducts title="Ganaderia" />
      <HeroGanaderia />
      <GanaderiaProductSection />
    </Layout>
  );
};

export default GanaderiaPage;
