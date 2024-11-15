import { RoadMap2, SeparateBar, Table } from "@/components/examples";
import { cnCode, SeparateBarTSX } from "@/lib/data";
import { useState } from "react";

const SeparateBarPage = () => {
  const [colors, setColors] = useState(["yellow", "orange", "blue"]);

  const handleColorChange = (index: number, value: string) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  const colorOptions = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white pl-4">
        Separate bar
      </h1>
      <p className="pl-4">A customizable hr with a bg-gradient.</p>
      <div className="w-full flex flex-col items-center gap-20 md:pt-10 pt-4">
        <div className="w-80 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50">
            Preview
          </h2>
          <hr className="border border-white/40 mb-8 mt-2" />
          <SeparateBar
            color1={colors[0]}
            color2={colors[1]}
            color3={colors[2]}
          />
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
            {["color1", "color2", "color3"].map((label, index) => (
              <div key={label} className="flex items-center gap-4">
                <label htmlFor={label} className="text-white font-medium">
                  {label}:
                </label>
                <select
                  id={label}
                  value={colors[index]}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                  className="p-2 rounded bg-gray-800 text-white"
                >
                  {colorOptions.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
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
