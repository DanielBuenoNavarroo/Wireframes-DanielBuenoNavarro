import { RoadMap2, SeparateBar, Table } from "@/components/examples";
import { cnCode, SeparateBarTSX } from "@/lib/data";

const SeparateBarPage = () => {
  const data = {
    headers: ["Props", "Type", "Default", "Description"],
    rows: [
      ["color1", "string", "yellow", "select the from gradient color"],
      ["color2", "string", "orange", "select the via gradient color"],
      ["color3", "string", "blue", "select the to gradient color"],
    ],
  };
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Separate bar
      </h1>
      <p>A customizable hr with a bg-gradient.</p>
      <div className="w-full flex flex-col items-center gap-20 md:pt-10">
        <div className="w-80 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50">
            Preview
          </h2>
          <hr className="border border-white/40 mb-8 mt-2" />
          <SeparateBar color1={"emerald"} color2={"green"} color3={"blue"} />
        </div>
        <div className="w-80 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem] text-white">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50">
            Code
          </h2>
          <hr className="border border-white/40 mt-2 mb-8" />
          <RoadMap2
            data={[
              {
                title: "add @lib/utils/index.ts",
                code: cnCode,
              },
              {
                title: "@components/Carousel.tex",
                code: SeparateBarTSX,
              },
            ]}
          />
        </div>
        <div className="w-80 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50">
            Props
          </h2>
          <hr className="border border-white/40 mb-8 mt-2" />
          <Table data={data} />
        </div>
      </div>
    </>
  );
};

export default SeparateBarPage;
