import { Examples, FAQ, Hero } from "@/components/home";
import { SeparateBar } from "@/components/examples";
import RoadMap from "@/components/examples/RoadMap/RoadMap.tsx";
import RoadMap2 from "@/components/examples/RoadMap2/RoadMap2.tsx";
import Table from "@/components/examples/Table/Table";

const Home = () => {
  const data = {
    headers: ["asdf", "asdf", "asdf", "asdf"],
    rows: [
      ["xd", "xd", "xd", "xd"],
      ["xd", "xd", "xd", "xd"],
      ["xd", "xd", "xd", "xd"],
    ],
  };
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col items-center pb-16">
      <Hero />
      <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[35rem] py-20"}>
        <SeparateBar />
      </div>
      <Examples />
      <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[35rem] py-20"}>
        <SeparateBar />
      </div>
      <FAQ />
      <div className={"w-full py-8 flex justify-center"}>
        <RoadMap />
      </div>
      <div>
        <RoadMap2
          data={[
            {
              title: "Install dependencies",
              code: "npm i framer-motion clsx tailwind-merge @tabler/icons-react",
            },
          ]}
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Home;
