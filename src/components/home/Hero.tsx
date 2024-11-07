const Hero = () => {
  return (
    <section className="w-full pt-5 relative">
      <main className="w-full max-w-[2000px] pt-24 flex flex-col items-center justify-center relative bg-black/10 rounded-[237px] border border-white/5 shadow-[inset_0_-20px_50px_0_rgba(0,0,0,0.2)]">
        <h1 className="font-semibold text-6xl leading-relaxed text-center relative top-4">
          Open Source
          <br />
          Free UI Components
        </h1>
        <div className="rounded-[191px] border border-white/5 bg-black/15 shadow-[inset_0_-10px_40px_0_rgba(0,0,0,0.2)] pt-[170px] px-[187px] pb-[132px]"></div>
      </main>
    </section>
  );
};

export default Hero;
