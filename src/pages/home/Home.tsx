import ChooseUs from "../../components/home/ChooseUs";
import CustomersSay from "../../components/home/CustomersSay";
import FAQ from "../../components/home/FAQ";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import HomeBanner from "../../components/home/HomeBanner";
import ReadyToOrder from "../../components/home/ReadyToOrder";
import TrustedPartner from "../../components/home/TrustedPartner";

const Home = () => {
  return (
    <div className="space-y-40">
      <HomeBanner />
      <div className="-mt-40">
        <TrustedPartner />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <ChooseUs />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <CustomersSay />
      </div>
      <div>
        <ReadyToOrder />
      </div>
    </div>
  );
};

export default Home;
