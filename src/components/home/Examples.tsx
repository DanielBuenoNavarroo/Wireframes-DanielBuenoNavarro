import {home} from '@/lib/classes'
import {useState} from "react";
import {Carousel, CodeViewer} from "@/components/examples";
import {Car1, Car2, Car3, Car4, Car5} from '@/assets'
import {ChevronsRight} from "lucide-react";
import {Link} from "react-router-dom";

const Examples = () => {
    type possibleActives = "btn1" | "btn2" | "btn3";

    const [btn1IsActive, setBtn1IsActive] = useState(true)
    const [btn2IsActive, setBtn2IsActive] = useState(false)
    const [btn3IsActive, setBtn3IsActive] = useState(false)

    const handleActive = (active: possibleActives) => {
        setBtn1IsActive(active === "btn1");
        setBtn2IsActive(active === "btn2")
        setBtn3IsActive(active === "btn3")
    }

    const images = [Car1, Car2, Car3, Car4, Car5]

    const code = `function helloUser(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {helloUser(user)}!
  </h1>
);`

    return (
        <section className="w-full pt-5 relative flex flex-col items-center justify-center gap-8">
            <h1 className={home.h1}>Preview for all components!</h1>
            <div className={"w-full flex flex-wrap justify-center gap-8 py-10"}>
                <div
                    onMouseEnter={() => handleActive("btn1")}
                    className={`max-w-40 w-full border-2 rounded-lg p-4 text-gray-200 text-center cursor-pointer ${btn1IsActive ? 'border-violet-700/80 shadow-2xl shadow-violet-700/90' : 'border-white/20'}`}>
                    Carrousel
                </div>
                <div
                    onMouseEnter={() => handleActive("btn2")}
                    className={`max-w-40 w-full border-2 rounded-lg p-4 text-gray-200 text-center cursor-pointer ${btn2IsActive ? 'border-green-700/80 shadow-2xl shadow-green-700/90' : 'border-white/20'}`}>
                    CodeViewer
                </div>
                <div
                    onMouseEnter={() => handleActive("btn3")}
                    className={`max-w-40 w-full border-2 rounded-lg p-4 text-gray-200 text-center cursor-pointer ${btn3IsActive ? 'border-orange-700/80 shadow-2xl shadow-orange-700/90' : 'border-white/20'}`}>
                    Chart
                </div>
            </div>
            {btn1IsActive && (
                <div
                    className={'w-60 sm:w-80 md:w-[30rem] lg:w-[50rem] xl:w-1/2 aspect-video transition-all duration-500 flex flex-col items-center justify-center'}>
                    <Carousel images={images}/>
                </div>
            )}
            {btn2IsActive && (
                <div
                    className={'w-60 sm:w-80 md:w-[30rem] lg:w-[50rem] xl:w-1/2 transition-all duration-500 flex flex-col items-center justify-center'}>
                    <CodeViewer code={code}/>
                </div>
            )}
            {btn3IsActive && (
                <div
                    className={'w-80 md:w-[30rem] lg:w-[50rem] xl:w-[70rem] 2xl:w-[90rem] aspect-video transition-all duration-500 flex flex-col items-center justify-center'}>
                    <Carousel images={images}/>
                </div>
            )}
            <div className={'border border-neutral-200/10 rounded-3xl p-4'}>
                <div className={'border border-neutral-200/10 rounded-2xl p-1'}>
                    <Link to={'/docs'} className={'bg-neutral-800 px-4 py-2 rounded-xl text-gray-300 flex gap-2'}>
                        Show more
                        <ChevronsRight className={'stroke-gray-300 -mr-1'}/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Examples;