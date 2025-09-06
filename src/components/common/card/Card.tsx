import { CartSvg } from "../../../svg-container/SvgContainer";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="w-[355px] h-[390px] bg-[#F9FAFB] border border-[#DFE3E8] rounded-2xl font-inter">
      <img
        className="w-[145px] mx-auto h-[231px] object-cover mt-[45px]"
        src={image}
        alt={title}
      />
      {/* This is the card */}
      <div className="mx-[28px] mt-6 flex items-end justify-between">
        <div>
          <p className="text-[#212B36] text-xl font-semibold">{title}</p>
          <p className="mt-2 text-[#212B36] text-base font-medium">
            {description}
          </p>
        </div>
        <CartSvg />
      </div>
    </div>
  );
};

export default Card;
