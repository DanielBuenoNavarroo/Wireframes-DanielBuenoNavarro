import {Clipboard} from "lucide-react";

const Hero = () => {
    return (
        <section className="w-full py-5 px-8 flex items-center justify-center">
            <main
                className="w-full max-w-screen-xl px-10 sm:px-16 md:px-20 py-20 flex flex-col items-center justify-center bg-black/5 rounded-[5rem] sm:rounded-[10rem] border border-white/5 shadow-lg shadow-orange-600 gap-16">
                <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl leading-relaxed text-center sour-gummy-custom">
                    Open Source <span className="whitespace-nowrap inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold">Free UI</span> Components
                </h1>
                <div
                    className="rounded-[3.5rem] border border-white/5 bg-black/5 shadow-lg px-6 sm:px-12 lg:px-20 pt-6 pb-8">
                    <p className="text-gray-400 text-lg sm:text-xl md:text-2xl text-center">
                        Develop faster. Maintain control. Reduce costs.
                    </p>
                    <div
                        className="w-full h-full rounded-[2.5rem] border border-white/5 bg-gray-950/50 shadow-lg sm:px-12 md:px-20 sm:py-8 mt-6">
                        <div className="w-full h-full bg-orange-600 rounded-xl px-1 py-[1px]">
                            <div
                                className="bg-neutral-950 flex items-center justify-center rounded-lg py-4 px-6 sm:px-8 text-sm md:text-md lg:text-lg text-center">
                                npm create vite@latest <Clipboard className="ml-4 stroke-gray-500 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Hero;
