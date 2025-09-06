import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface ReviewCardProps {
  name: string;
  role: string;
  review: string;
  image: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  review,
  image,
  rating,
}) => {
  return (
    <div className="w-[480px] bg-[#F9FAFB] border border-[#EAF1FF] rounded-2xl p-10 shadow-cardBox font-inter hover:shadow-lg hover:scale-[1.03] transition-all duration-300 hover:bg-[#6DB1EE] group cursor-pointer">
      <div className="flex items-center gap-[14px]">
        <img src={image} alt={`${name}-img`} />
        <div>
          <p className="text-[#37404A] text-xl font-semibold group-hover:text-white">
            {name}
          </p>
          <p className="text-[#637381] text-base group-hover:text-white">
            {role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-[#637381] text-lg group-hover:text-white">
        {review}
      </p>
      <div className="mt-6">
        <Rating style={{ maxWidth: 128 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default ReviewCard;
