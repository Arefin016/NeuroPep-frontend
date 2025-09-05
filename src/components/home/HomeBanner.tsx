import homeBannerImg from "../../assets/home/home-banner.png";
import blurImg from "../../assets/home/blur.png";
import {
  ResearchUseOnlySvg,
  ShopNowSvg,
} from "../../svg-container/SvgContainer";
import { Link } from "react-router";
import raysImg from "../../assets/home/rays.png";
import preciouslyImg from "../../assets/home/preciously-img.png";

const HomeBanner = () => {
  return (
    <div className="mx-[223px] font-inter h-screen">
      <div className="grid grid-cols-2">
        {/* This is the left text */}
        <div className="mt-[20px]">
          <h1 className="text-[#37404A] text-[64px] font-bold relative z-20">
            Secure, Reliable, and Lab Tested Products for Researchers
          </h1>
          <p className="text-[#637381] text-lg font-medium max-w-[437px] w-full mt-4 relative z-20">
            American-made, veteran-owned products trusted by researchers
            nationwide.
          </p>
          <div className="mt-12 flex gap-[18px] items-center relative z-50">
            <Link
              to="/shop"
              className="bg-gradient-to-b from-[#6DB1EE] to-[#4EA2ED] 
             flex items-center gap-3 
             text-white font-medium 
             py-[18px] px-8 rounded-[12px] 
             transition-all duration-300 
             hover:from-[#4EA2ED] hover:to-[#6DB1EE] 
             hover:shadow-lg 
             active:scale-95"
            >
              Shop Now <ShopNowSvg />
            </Link>
            <Link
              to="/offers"
              className="flex items-center gap-3 
             text-[#637381] font-semibold
             py-4 px-8 rounded-[12px] border-2 border-[#C4CDD5] 
             transition-all duration-300 
             hover:bg-[#6DB1EE] hover:border-[#6DB1EE] hover:text-[white] 
             hover:shadow-md 
             active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* This is the right side image */}
        <div className="">
          <img
            className="relative z-20 w-[1100px] h-[733px] object-cover"
            src={homeBannerImg}
            alt="home-banner"
          />
          <img
            className="absolute -top-[80px] z-10"
            src={blurImg}
            alt="blur-img"
          />
        </div>
      </div>
      {/* rays image */}
      <img
        className="absolute left-0 top-[360px]"
        src={raysImg}
        alt="ray-image"
      />
      {/* This is the Trusted Purity */}
      <div className="max-w-[300px] w-full bg-[#ffffffdf] p-6 rounded-[12px] shadow-box absolute top-[540px] right-[200px]">
        <p className="text-[#6DB1EE] text-xl font-semibold relative z-[999]">
          Trusted Purity
        </p>
        <p className="text-[#637381]">
          Backed by third-party lab testing for identity and safety.
        </p>
      </div>
      {/* This is the Research Use Only */}
      <div className="max-w-[220px] w-full bg-[#FFFFFF80] py-4 px-[18px] rounded-[12px] shadow-box absolute backdrop-blur-[14.5px] flex items-center gap-[10px] right-[220px] top-[265px] z-30">
        <ResearchUseOnlySvg />
        <p className="text-[#6DB1EE] text-base font-semibold">
          Research Use Only
        </p>
      </div>
      {/* This is the Trusted Purity */}
      <div className="max-w-[250px] w-full bg-[#ffffffdf] py-4 px-[18px] rounded-[12px] shadow-box absolute flex items-center gap-[10px] right-[770px] top-[420px] z-30">
        <img src={preciouslyImg} alt="" />
        <p className="text-[#637381]">
          Precisely measured for experimental accuracy
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
