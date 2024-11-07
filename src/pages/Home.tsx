import {Examples, Hero} from "@/components/home";
import {SeparateBar} from "@/components/examples";

const Home = () => {
    return (
        <div className="w-full h-full overflow-y-auto flex flex-col items-center pb-16">
            <Hero />
            <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[45rem] py-20"}><SeparateBar /></div>
            <Examples />
            <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[45rem] py-20"}><SeparateBar /></div>
        </div>
    );
};

export default Home;
