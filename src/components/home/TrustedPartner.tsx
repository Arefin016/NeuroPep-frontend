import { Link } from "react-router";
import trustedPartner from "../../assets/home/trusted-partner.png";
import { LearnMoreSvg, SeaSvg } from "../../svg-container/SvgContainer";

const TrustedPartner = () => {
  return (
    <section className="mx-[220px] bg-[#E9F1F8] rounded-[12px] h-[460px] font-inter relative">
      <div className="flex flex-row relative py-[60px]">
        {/* THis is the first div */}
        <div className="w-[50%] px-[71px]">
          <img
            className="w-[682px] h-[511px] object-cover absolute -top-[50px]"
            src={trustedPartner}
            alt="trusted-partner"
          />
        </div>
        {/* This is the second div */}
        <div className="w-[50%]">
          <h1 className="text-[#37404A] text-5xl font-semibold leading-[64px]">
            Your Trusted Partner in Research Excellence
          </h1>
          <p className="text-[#637381] text-base max-w-[600px] font-medium mt-2">
            At NeuroPep, we are committed to providing premium research-grade
            compounds that meet the highest standards of quality and
            reliability. Founded and operated by U.S. veterans, our mission is
            built on integrity, trust, and dedication.
          </p>
          {/* This is the button section */}
          <div className="max-w-[154px] w-full mt-12">
            <Link
              to="/shop"
              className="bg-gradient-to-b from-[#6DB1EE] to-[#4EA2ED] 
             flex items-center justify-center gap-3 
             text-white font-medium py-3
              rounded-[12px] 
             transition-all duration-300 
             hover:from-[#4EA2ED] hover:to-[#6DB1EE] 
             hover:shadow-lg 
             active:scale-95"
            >
              Learn More <LearnMoreSvg />
            </Link>
          </div>
        </div>
        {/* This is the SeaSvg */}
        <div className="absolute -top-5 -left-16">
          <SeaSvg />
        </div>
        {/* This is the SeaSvg */}
        <div className="absolute -bottom-0 -right-[70px]">
          <SeaSvg />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
