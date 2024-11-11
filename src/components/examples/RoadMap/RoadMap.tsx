import RoadMapItem from "@/components/examples/RoadMap/RoadMapItem.tsx";

const RoadMap = () => {
    const data = [
        {
            title: "First Principles Thinking",
            content: ["Start with the customer as the basis for any conversation", "Boil down a problem into its fundamental variables and determinants", "Think critically and maintain intellectual humility"]
        },
        {
            title: "Consistency compounds",
            content: ["Show up everyday - good days and bad", "Michael Phelps trained for 3+ hours for 1825 consecutive days without missing a single day of training"]
        },
        {
            title: "Results matter",
            content: ["Process and inputs matter, but if results don't appear, reassess what you're doing"]
        },
        {
            title: "First Principles Thinking",
            content: ["Start with the customer as the basis for any conversation", "Boil down a problem into its fundamental variables and determinants", "Think critically and maintain intellectual humility"]
        },
        {
            title: "First Principles Thinking",
            content: ["Start with the customer as the basis for any conversation", "Boil down a problem into its fundamental variables and determinants", "Think critically and maintain intellectual humility"]
        },
        {
            title: "Consistency compounds",
            content: ["Show up everyday - good days and bad", "Michael Phelps trained for 3+ hours for 1825 consecutive days without missing a single day of training"]
        },
        {
            title: "Results matter",
            content: ["Process and inputs matter, but if results don't appear, reassess what you're doing"]
        },
        {
            title: "First Principles Thinking",
            content: ["Start with the customer as the basis for any conversation", "Boil down a problem into its fundamental variables and determinants", "Think critically and maintain intellectual humility"]
        },
        {
            title: "First Principles Thinking",
            content: ["r any conversation", "Boil down a problem into its fundamental variables and determinants", "Think critically and maintain intellectual humility"]
        },
    ]
    return (
        <div className={"flex flex-col gap-8 relative pt-16 px-6 md:px-0"}>
            {data.map(({title, content}, i) => (<RoadMapItem title={title} content={content} key={i}/>))}
            <div className={"w-1 h-full absolute top-0 left-[2.6rem] md:left-[1.1rem] -z-10 rounded-sm bg-RoadMap-custom-gradient"}/>
        </div>
    )
}

export default RoadMap