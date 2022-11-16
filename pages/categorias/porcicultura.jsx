import { Layout } from "../../components/layouts";
import { SEOProducts } from "../../components/ui";
import {
  HeroPorcinos,
  PorcinosProductSection,
} from "../../sections/categorias-de-productos/porcinosPage";

const PorciculturaPage = () => {
  return (
    <Layout>
      <SEOProducts title="Porcicultura" />
      <HeroPorcinos />
      <PorcinosProductSection />
    </Layout>
  );
};

export default PorciculturaPage;
