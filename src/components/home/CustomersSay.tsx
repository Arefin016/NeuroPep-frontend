import ReviewCard from "../common/review-card/ReviewCard";
import humanImg from "../../assets/card-img/human.png";

const CustomersSay = () => {
  const reviews = [
    {
      name: "Ethan Williams",
      role: "Research Scientist",
      review:
        "High-quality products and fast delivery. I appreciate the professionalism and transparency in every order.",
      image: humanImg,
      rating: 4,
    },
    {
      name: "Sophia Brown",
      role: "Lab Technician",
      review:
        "Excellent customer support and reliable shipping. The quality exceeded my expectations.",
      image: humanImg,
      rating: 5,
    },
    {
      name: "Daniel Smith",
      role: "Pharmacology Student",
      review:
        "Affordable pricing and well-packaged products. Definitely recommend for research purposes.",
      image: humanImg,
      rating: 3,
    },
  ];
  return (
    <div className="mx-[220px]">
      {/* This is the title section */}
      <div className="text-center">
        <p className="text-[#37404A] text-5xl font-semibold">
          What Our Customers Say
        </p>
        <p className="text-[#637381] text-base font-medium max-w-[481px] w-full mx-auto mt-2">
          Trusted by researchers nationwide for quality and reliability
        </p>
      </div>
      {/* This is the card  */}
      <div className="mt-11">
        <div className="grid gap-6 grid-cols-3">
          {reviews.map((r, idx) => (
            <ReviewCard key={idx} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
