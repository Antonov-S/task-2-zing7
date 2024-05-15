import { RESULTS_DATA } from "@/lib/constants";

import ResultCard from "../ui/result-card";

function Results() {
  return (
    <section className="container mx-auto px-4 py-24 lg:py-32">
      <h3 className="font-bold text-3xl tracking-[0.69px] sm:text-[48px] sm:leading-[68px] sm:tracking-[0.67px] pb-2">
        Real-life results and revenue
      </h3>
      <p className="text-lg text-gray-custom-600 pb-10">
        See how companies like yours have smashed thier sales success goals
      </p>
      <ul>
        {RESULTS_DATA.map(item => (
          <ResultCard key={item.author.name} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default Results;
