interface ChooseUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ChooseUsCard = ({ icon, title, description }: ChooseUsCardProps) => {
  return (
    <div className="max-w-[480px] w-full bg-[#FAFBFC] rounded-2xl p-10 shadow-cardBox font-inter cursor-pointer hover:shadow-lg hover:scale-[1.03] transition-all duration-300 hover:bg-[#6DB1EE] group">
      {icon}
      <div>
        <p className="text-[#454F5B] text-[26px] font-semibold mt-6 group-hover:text-white">
          {title}
        </p>
        <p className="text-[#637381] text-base font-medium mt-3 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
