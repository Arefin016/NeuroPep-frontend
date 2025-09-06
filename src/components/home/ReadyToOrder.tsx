import { Link } from "react-router";
import { LearnMoreSvg } from "../../svg-container/SvgContainer";

const ReadyToOrder = () => {
  return (
    <div className="mx-[345px] mb-[60px] bg-[#E9F1F8] rounded-3xl p-[64px] font-inter">
      <div className="flex justify-between items-end">
        {/* This is the left side div */}
        <div className="max-w-[490px] w-full">
          <p className="text-[#37404A] text-[32px] font-semibold">
            Ready to Order Your Research Compounds?
          </p>
          <p className="text-[#637381] text-base font-medium mt-2">
            Premium quality, American made, and trusted by researchers
            nationwide.
          </p>
        </div>
        {/* This is the right side div */}
        <div>
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
              Shop Now <LearnMoreSvg />
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
      </div>
    </div>
  );
};

export default ReadyToOrder;
