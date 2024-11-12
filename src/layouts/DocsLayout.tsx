import { LeftContainer, RightContainer } from "@/containers/Docs";

const DocsLayout = () => {
  return (
    <div className="w-screen max-w-screen-2xl h-screen min-h-screen md:flex border-x border-white/20">
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default DocsLayout;