/* eslint-disable @typescript-eslint/ban-ts-comment */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cardImage from "../../assets/home/card-img.png";

// @ts-ignore
// Import Swiper styles
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import Card from "../common/card/Card";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";
import { LearnMoreSvg } from "../../svg-container/SvgContainer";

const FeaturedProducts = () => {
  const products = [
    { image: cardImage, title: "Semax 10 mg", description: "Best for health" },
    {
      image: cardImage,
      title: "Nootropil 800 mg",
      description: "Memory booster",
    },
    {
      image: cardImage,
      title: "Modafinil 200 mg",
      description: "Stay focused",
    },
    {
      image: cardImage,
      title: "Piracetam 400 mg",
      description: "Brain enhancer",
    },
    {
      image: cardImage,
      title: "Phenibut 250 mg",
      description: "Calm and relax",
    },
    {
      image: cardImage,
      title: "Aniracetam 750 mg",
      description: "Creativity boost",
    },
    {
      image: cardImage,
      title: "Modafinil 200 mg",
      description: "Stay focused",
    },
    {
      image: cardImage,
      title: "Piracetam 400 mg",
      description: "Brain enhancer",
    },
    {
      image: cardImage,
      title: "Phenibut 250 mg",
      description: "Calm and relax",
    },
    {
      image: cardImage,
      title: "Aniracetam 750 mg",
      description: "Creativity boost",
    },
  ];
  return (
    <div className="font-inter">
      {/* This is the title section */}
      <div className="text-center">
        <p className="text-[#37404A] text-5xl font-semibold">
          Our Featured Products
        </p>
        <p className="text-[#637381] text-base font-medium max-w-[481px] w-full mx-auto mt-2">
          Explore our premium research-grade compounds, trusted by labs and
          researchers nationwide
        </p>
      </div>
      {/* This is the swiper js section */}
      <>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          // loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper mt-12"
        >
          {products.map((product, index) => (
            <SwiperSlide className="!w-fit" key={index}>
              <Card
                image={product.image}
                title={product.title}
                description={product.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* This is the button section */}
        <div className="max-w-[154px] mx-auto w-full mt-12">
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
            View all <LearnMoreSvg />
          </Link>
        </div>
      </>
    </div>
  );
};

export default FeaturedProducts;
