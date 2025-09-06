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
      </>
    </div>
  );
};

export default FeaturedProducts;
