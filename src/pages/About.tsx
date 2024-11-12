import { ContactUs } from "@/components/about";
import { RoadMap, SeparateBar } from "@/components/examples";

const About = () => {
  const data = [
    {
      title: "Core Values",
      content: [
        "Empower developers with easy-to-use, reusable components",
        "Focus on accessibility and performance in every element",
        "Maintain open communication with the community for feedback",
      ],
    },
    {
      title: "Attention to Detail",
      content: [
        "Refine components to meet modern design standards",
        "Ensure seamless integration with popular frameworks",
        "Regularly update based on user needs and new tech trends",
      ],
    },
    {
      title: "Commitment to Growth",
      content: [
        "Stay up-to-date with industry best practices",
        "Encourage user feedback and contributions to improve quality",
        "Expand the component library to cover diverse use cases",
      ],
    },
    {
      title: "First Principles Thinking",
      content: [
        "Build components from the ground up based on user needs",
        "Focus on fundamental design principles to ensure scalability",
        "Encourage innovation without compromising usability",
      ],
    },
  ];
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-200 text-center">
        Our filosofy
      </h2>
      <div className={"w-full py-8 flex justify-center"}>
        <RoadMap data={data} />
      </div>
      <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[35rem] py-20"}>
        <SeparateBar />
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-200 text-center">
        Got a Question?
      </h2>
      <p className="text-base md:text-xl text-gray-400 mt-4">We'd like to talk more about what you need</p>
      <div className={"py-8"}>
        <ContactUs />
      </div>
    </>
  );
};

export default About;
