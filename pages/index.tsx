import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const HomePage = ({ product }: any) => {
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const featuredProductId = "64ca304bfabf326d2c130656";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
