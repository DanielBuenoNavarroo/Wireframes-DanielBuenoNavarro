import { LucideIcon } from "lucide-react";

type PricingCardsProps = {
  data: {
    icon: LucideIcon;
    title: string;
    price: string;
    features: string[];
  }[];
};

const PricingCards = ({ data }: PricingCardsProps) => {
  return (
    <div className="w-full px-4 pb-16">
      <div className="w-fit lg:mx-auto flex flex-wrap justify-center gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="w-80 lg:w-[30rem] shadow-xl flex flex-col items-center content-center p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-white/10"
          >
            {<card.icon className="w-20" />}
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-4 border-b mx-8 ${index === 0 && "mt-8"}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-orange-500 border border-orange-500/20 hover:text-orange-500 hover:bg-neutral-900 duration-150 w-48 rounded-md font-medium my-8 px-6 py-3`}
            >
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
