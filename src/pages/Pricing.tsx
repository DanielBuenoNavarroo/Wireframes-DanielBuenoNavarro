import { PricingCards, PricingContact } from "@/components/pricing";
import { User } from "lucide-react";

const Pricing = () => {
  const cardData = [
    {
      icon: User,
      title: "Custom Components",
      price: "$149/mo",
      features: [
        "As many components as possible in a month",
        "Design + Development",
        "24-hour support response time",
      ],
    },
    {
      icon: User,
      title: "Pages",
      price: "$299/mo",
      features: [
        "One request / page at a time",
        "Design + Development",
        "24-hour support response time",
      ],
    },
    {
      icon: User,
      title: "Enterprise",
      price: "$Custom",
      features: [
        "Multi-page landing page website",
        "Design + Development",
        "AI Apps development",
      ],
    },
  ];
  return (
    <>
      <h2 className="max-w-[60rem] text-3xl md:text-5xl font-semibold text-gray-200 text-center">
        Need custom components or websites? We've got you covered
      </h2>
      <p className="mt-6 mb-16 max-w-[30rem] text-center text-gray-400 text-lg">
        From custom components to complete website tailored to your needs.
        Simple pricing, no hidden fees.
      </p>
      <PricingCards data={cardData} />
      <PricingContact />
    </>
  );
};

export default Pricing;
