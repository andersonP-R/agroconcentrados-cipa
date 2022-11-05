import { Layout } from "../components/layouts";
import { CotizacionSection, Hero, ProductSection } from "../sections/homePage";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <ProductSection />
      <CotizacionSection />
    </Layout>
  );
};

export default HomePage;
