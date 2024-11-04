import {Car1, Car2, Car3, Car4, Car5} from "@/assets";
import {Carousel} from "@/components/examples";

const Home = () => {
    const IMAGES = [Car1, Car2, Car3, Car4, Car5];
    return (
        <div className="w-full overflow-y-auto">
            {/*
            <Hero />
            */}
            <div className={`max-w-screen-xl w-full aspect-video m-auto`}>
                <Carousel images={IMAGES}/>
            </div>
        </div>
    );
};

export default Home;
