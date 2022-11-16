import { Layout } from "../../components/layouts";
import { SEOProducts } from "../../components/ui";
import {
  AviculturaProductSection,
  HeroAvicultura,
} from "../../sections/categorias-de-productos/aviculturaPage";

const AviculturaPage = () => {
  return (
    <Layout>
      <SEOProducts title="Avicultura" />
      <HeroAvicultura />
      <AviculturaProductSection />
    </Layout>
  );
};
export default AviculturaPage;
