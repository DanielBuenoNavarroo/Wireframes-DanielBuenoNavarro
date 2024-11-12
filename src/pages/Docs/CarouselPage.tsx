import { Car1, Car2, Car3, Car4, Car5 } from "@/assets";
import { Carousel, CodeViewer, Table } from "@/components/examples";
import { carrouselTSX } from "@/lib/data";

const CarouselPage = () => {
  const images = [Car1, Car2, Car3, Car4, Car5];
  const data = {
    headers: ["Props", "Type", "Default", "Description"],
    rows: [
      ["images", "string[]", "Required", "Array of images src"],
      ["autoplay", "bool", "true", "Set the autoplay"],
      ["interval", "number", "5000", "Set the interval"],
    ],
  };
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Carousel
      </h1>
      <p>A sleek and minimal carousel implementation.</p>
      <div className="w-full flex flex-col items-center gap-20 md:pt-10">
        <div className="w-80 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50">
            Preview
          </h2>
          <hr className="border border-white/40 mb-8 mt-2" />
          <div className="aspect-video">
            <Carousel images={images} autoPlay={true} interval={2500} />
          </div>
        </div>
        <div className="w-80 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50">
            Code
          </h2>
          <hr className="border border-white/40 mb-8 mt-2" />
          <CodeViewer code={carrouselTSX} />
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

export default CarouselPage;
