import faqImage from "../../assets/home/faq-image.png";
import blurTwoImage from "../../assets/home/blur-two.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const accordionData = [
    {
      value: "item-1",
      title: "Are these products safe for human consumption?",
      content: [
        "No. All products are strictly for laboratory and research use only. They are not intended for human consumption under any circumstances.",
      ],
    },
    {
      value: "item-2",
      title: "How do I place an order?",
      content: [
        "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
        "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
      ],
    },
    {
      value: "item-3",
      title: "What payment methods do you accept?",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
        "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
      ],
    },
    {
      value: "item-4",
      title: "Is my payment information secure?",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
        "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
      ],
    },
    {
      value: "item-5",
      title: "What is your refund policy?",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
        "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
      ],
    },
  ];
  return (
    <div className="mx-[250px]">
      {/* This is the title section */}
      <div className="text-center">
        <p className="text-[#37404A] text-5xl font-semibold">
          Frequently Asked Questions
        </p>
        <p className="text-[#637381] text-base font-medium max-w-[481px] w-full mx-auto mt-2">
          Everything you need to know, answered clearly.
        </p>
      </div>
      {/* This is the accordian */}
      <div className="flex justify-between mt-9">
        {/* This is the image */}
        <div className="left relative flex-2">
          <figure className="relative w-fit h-fit z-0 select-none">
            <img src={faqImage} alt="blur-image" />
            <img
              className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2  -z-10 scale-200"
              src={blurTwoImage}
              alt="blur-image"
            />
          </figure>
        </div>
        {/* This is accordian */}
        <div className="right flex-3 p-8">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <Accordion type="single" collapsible>
              {accordionData.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="group rounded-md hover:no-underline">
                    <span
                      className="
      w-fit text-lg font-semibold 
      text-[#454F5B] 
      group-data-[state=open]:bg-gradient-to-tr 
      group-data-[state=open]:from-[#6DB1EE] 
      group-data-[state=open]:to-[#4EA2ED] 
      group-data-[state=open]:bg-clip-text 
      group-data-[state=open]:text-transparent
    "
                    >
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {item.content.map((text, idx) => (
                      <p key={idx} className="text-[#637381] text-base">
                        {text}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
