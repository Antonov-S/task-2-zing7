import { INFO_DATA } from "@/lib/constants";

import InfoCard from "../ui/info-card";

function Info() {
  return (
    <section className="container px-4 pb-24">
      {INFO_DATA.map(info => (
        <InfoCard key={info.id} {...info} />
      ))}
    </section>
  );
}

export default Info;
