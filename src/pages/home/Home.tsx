import HomeBanner from "../../components/home/HomeBanner";
import TrustedPartner from "../../components/home/TrustedPartner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="mb-[160px] mt-[120px]">
        <TrustedPartner />
      </div>
    </div>
  );
};

export default Home;
