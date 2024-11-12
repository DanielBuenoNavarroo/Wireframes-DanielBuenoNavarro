import RoadMapItem from "@/components/examples/RoadMap/RoadMapItem.tsx";

type RoadMapProps = {
  data: {
    title: string;
    content: string[];
  }[];
};

const RoadMap = ({ data }: RoadMapProps) => {
  return (
    <div className={"flex flex-col gap-8 relative pt-16 px-6 md:px-0"}>
      {data.map(({ title, content }, i) => (
        <RoadMapItem title={title} content={content} key={i} />
      ))}
      <div
        className={
          "w-1 h-full absolute top-0 left-[2.6rem] md:left-[1.1rem] -z-10 rounded-sm bg-RoadMap-custom-gradient"
        }
      />
    </div>
  );
};

export default RoadMap;
