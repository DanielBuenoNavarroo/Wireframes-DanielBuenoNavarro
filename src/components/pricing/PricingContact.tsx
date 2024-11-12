import { PricingBg } from "@/assets";

const PricingContact = () => {
  return (
    <div className="w-full max-w-[60rem] bg-gradient-to-tl from-slate-700 to bg-slate-900 flex items-center justify-center rounded-3xl">
      <div className="w-full py-16 px-16 space-y-8 text-center md:text-start">
        <h3 className="text-3xl font-semibold text-gray-200">
          Let's talk and make it happen
        </h3>
        <p className="max-w-60 mx-auto md:mx-0 text-gray-400 text-lg">
          Reach out to us, and we'll respond as soon as possible.
        </p>
        <button className="bg-neutral-950 py-4 px-6 rounded-full border-b border-emerald-500 hover:border-emerald-700">
          Talk to us
        </button>
      </div>
      <div
        className="w-full h-full hidden md:block relative overflow-hidden bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${PricingBg})` }}
      />
    </div>
  );
};

export default PricingContact;
