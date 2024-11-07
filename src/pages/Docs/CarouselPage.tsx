import { CodeViewer } from "@/components/examples";
import { carrouselTSX } from "@/lib/data";

const CarouselPage = () => {
  return (
    <div className={"w-full"}>
      CarouselPage Codigo:
      <div className="w-full max-w-screen-lg">
        <CodeViewer code={carrouselTSX} />
      </div>
    </div>
  );
};

export default CarouselPage;
