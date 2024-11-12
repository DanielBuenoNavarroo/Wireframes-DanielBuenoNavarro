import { Examples, FAQ, Hero } from "@/components/home";
import { SeparateBar } from "@/components/examples";

const Home = () => {
  return (
    <>
      <Hero />
      <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[35rem] py-20"}>
        <SeparateBar />
      </div>
      <Examples />
      <div className={"w-60 sm:w-80 md:w-[25rem] lg:w-[35rem] py-20"}>
        <SeparateBar />
      </div>
      <FAQ />
    </>
  );
};

export default Home;
