import { INFO_DATA } from "@/lib/constants";

import InfoCard from "../ui/info-card";

function Info() {
  return (
    <section className="w-full bg-white">
      <div className="container px-4 pb-4">
        {INFO_DATA.map(info => (
          <InfoCard key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
}

export default Info;
