import {
  AmericanFlagSvg,
  FastCheckoutSvg,
  TrustedQualitySvg,
} from "../../svg-container/SvgContainer";
import ChooseUsCard from "../common/choose-us-card/ChooseUsCard";

const ChooseUs = () => {
  const cards = [
    {
      icon: <AmericanFlagSvg />,
      title: "American Made",
      description:
        "All products are proudly manufactured in the USA under strict quality standards.",
    },
    {
      icon: <TrustedQualitySvg />,
      title: "Trusted Quality",
      description:
        "Every compound is carefully tested to ensure consistency, purity, and reliability for research use.",
    },
    {
      icon: <FastCheckoutSvg />,
      title: "Secure & Fast Checkout",
      description:
        "We use encrypted payments and ship quickly, so you can focus on your work with confidence.",
    },
  ];
  return (
    <div className="mx-[220px]">
      {/* This is the title section */}
      <div className="text-center">
        <p className="text-[#37404A] text-5xl font-semibold">Why Choose Us?</p>
        <p className="text-[#637381] text-base font-medium max-w-[481px] w-full mx-auto mt-2">
          When it comes to research-grade compounds, trust and quality matter.
          Here’s why researchers choose us
        </p>
      </div>
      {/* This is the card section */}
      <div className="grid grid-cols-3 gap-6 mt-11">
        {cards.map((card, index) => (
          <ChooseUsCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
