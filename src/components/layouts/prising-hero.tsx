import { PRISING_DATA } from "@/lib/constants";
import PrisingCard from "../ui/prising-card";

function PrisingHero() {
  return (
    <section className="w-full bg-smoke py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline pb-16">
          <h1 className="text-5xl md:text-[64px] md:leading-[74px] tracking-[0.89px] font-bold">
            Choose the right plan <br />{" "}
            <span className="text-gray-custom-300">for your business</span>
          </h1>
          <p className="text-lg mt-8 text-left">
            Build with love for growing businesses.
            <br className="hidden md:inline" />
            Check out the Roooby CRM pricing grid
            <br className="hidden md:inline" />
            below. Switch between plans at any time.
          </p>
        </div>

        <div className="flex flex-col justify-around md:flex-row mx-auto px-4 space-y-4 md:space-x-4 md:space-y-0 mt-6 md:mt-12 mb-20">
          {PRISING_DATA.map(card => (
            <PrisingCard key={card.id} {...card} />
          ))}
        </div>
        <hr className="md:mt-24 mb-7 my-4 border-gray" />
        <div className="flex flex-col items-center mx-auto md:items-center gap-5 md:flex-row  md:gap-6 mb-24 md:mb-32">
          <h2 className="text-black  text-xl md:text-3xl font-bold">
            Need help choosing the right plan?
          </h2>
          <button className="bg-white text-black font-bold py-3 px-8 border border-gray-custom-100 rounded-lg hover:text-white hover:bg-accent md:ml-6">
            Contact sales
          </button>
          <button className="bg-white text-black font-bold py-3 px-8 border border-gray-custom-100 rounded-lg hover:text-white hover:bg-accent md:ml-6">
            Compare plans
          </button>
        </div>
      </div>
    </section>
  );
}

export default PrisingHero;
