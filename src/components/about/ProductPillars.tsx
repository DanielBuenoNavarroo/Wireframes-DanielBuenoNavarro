import { Copyright, DollarSign, Lightbulb, LucideIcon } from "lucide-react";
import { useState } from "react";

const PillarContent = ({
  icon: Icon,
  paragraphs,
}: {
  icon: LucideIcon;
  paragraphs: string[];
}) => (
  <>
    <div className="border border-white/10 rounded-3xl p-2">
      <div className="border border-white/5 rounded-2xl bg-neutral-800">
        <div className="border-8 border-neutral-900 rounded-2xl p-4 bg-neutral-800">
          <Icon />
        </div>
      </div>
    </div>
    {paragraphs.map((text: string, index: number) => (
      <p key={index} className="text-gray-400">
        {text}
      </p>
    ))}
  </>
);

const ProductPillars = () => {
  const [contentIndex, setContentIndex] = useState(0);

  const pillars = [
    {
      title: "Absolute Free for everyone",
      icon: DollarSign,
      paragraphs: [
        "The best components should be accessible to all people.",
        "Our components are 100% free, enabling developers at all levels to build projects without budget constraints. No hidden fees, no limitations — just quality tools available to everyone.",
      ],
    },
    {
      title: "Open Source",
      icon: Copyright,
      paragraphs: [
        "We follow the open core model. The vast majority of ReactKit codebase is open source and free to use. 100% of the codebase is source available.",
      ],
    },
    {
      title: "Innovation Driven by Community",
      icon: Lightbulb,
      paragraphs: [
        "We are continuously enhancing and evolving our components based on community feedback and the latest web standards.",
        "Our goal is to stay at the cutting edge, ensuring our components are modern, efficient, and easy to use for everyone.",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 py-12 px-4">
      <div className="flex flex-col items-end gap-4">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            onMouseEnter={() => setContentIndex(index)}
            className={`w-full max-w-[33rem] py-6 px-8 rounded-3xl cursor-pointer ${
              contentIndex === index &&
              "bg-gradient-to-r from-neutral-800 to-neutral-950"
            }`}
          >
            <span
              className={`text-3xl font-semibold ${
                contentIndex === index
                  ? "bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent"
                  : "text-neutral-700"
              }`}
            >
              {pillar.title}
            </span>
          </div>
        ))}
      </div>
      <div className="lg:w-[50rem] min-h-[25rem] shadow-ProductPillars rounded-lg flex flex-col items-center text-center gap-4 px-2 md:px-8 py-8">
        <PillarContent
          icon={pillars[contentIndex].icon}
          paragraphs={pillars[contentIndex].paragraphs}
        />
      </div>
    </div>
  );
};

export default ProductPillars;
