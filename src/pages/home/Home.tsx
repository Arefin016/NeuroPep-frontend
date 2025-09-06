import ChooseUs from "../../components/home/ChooseUs";
import CustomersSay from "../../components/home/CustomersSay";
import FAQ from "../../components/home/FAQ";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import HomeBanner from "../../components/home/HomeBanner";
import ReadyToOrder from "../../components/home/ReadyToOrder";
import TrustedPartner from "../../components/home/TrustedPartner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="mb-[160px] mt-[120px]">
        <TrustedPartner />
      </div>
      <div className="my-[160px]">
        <FeaturedProducts />
      </div>
      <div className="my-[160px]">
        <ChooseUs />
      </div>
      <div className="my-[160px]">
        <FAQ />
      </div>
      <div className="my-[160px]">
        <CustomersSay />
      </div>
      <div>
        <ReadyToOrder />
      </div>
    </div>
  );
};

export default Home;
