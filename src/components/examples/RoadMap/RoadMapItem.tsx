type RoadMapItemProps = {
    title: string;
    content: string[];
};

const RoadMapItem = ({title, content}: RoadMapItemProps) => {
    return (<>
        <div className={"flex items-center"}>
            <div className={"size-10 rounded-full bg-gradient-to-b from-orange-600 via-orange-600 via-40% to-blue-500 p-1.5 relative"}>
                <div className={"size-full rounded-full bg-neutral-800"}/>
            </div>
            <div className={"w-20 h-1 bg-gradient-to-r from-orange-400/50 to-orange-400/5 rounded-sm"}/>
            <div className={"w-fit px-5 py-3 bg-neutral-900 text-orange-400 font-semibold text-3xl rounded-xl shadow-RoadMapTitle sour-gummy-custom"}>
                {title}
            </div>
        </div>
        <ul className={"w-full max-w-screen-lg px-10 py-6 ml-[7.5rem] mb-8 bg-neutral-900/40 rounded-xl shadow-RoadMapContent text-gray-400 text-md font-semibold space-y-4"}>
            {content.map((item, index) => (<li key={index} className={"list-disc ml-4 pl-2"}>{item}</li>))}
        </ul>
    </>)
}

export default RoadMapItem