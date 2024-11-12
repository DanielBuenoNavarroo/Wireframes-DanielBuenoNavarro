import {CodeViewer} from "@/components/examples";

type RoadMapProps = {
    data: {
        title: string;
        code: string;
    }[];
};

const RoadMap2 = ({data}: RoadMapProps) => {
    return (
        <div className={"w-full max-w-screen-lg border-l border-neutral-700"}>
            {data.map(({title, code}, index) => (
                <div className={"pl-8 mb-8 relative"} key={index}>
                    <div className={"w-2 h-8 bg-neutral-700 rounded-r-full absolute top-0 left-0"}></div>
                    <h2 className={"text-lg font-semibold mb-6"}>{title}</h2>
                    <CodeViewer code={code}/>
                </div>
            ))}
        </div>
    )
}

export default RoadMap2