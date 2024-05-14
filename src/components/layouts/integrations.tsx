import { INTEGRATIONS_DATA } from "@/lib/constants";
import Image from "next/image";

function Integrations() {
  return (
    <section className="shadow-[0_0_0_100vh_#150050] [clip-path:inset(0_-100vmax)] py-24 md:py-32 px-4">
      <div className="w-full mx-auto text-center">
        <h3 className="text-5xl leading-[68px] tracking-[-0.67px] font-bold mb-4">
          Over 300+ integrations
        </h3>
        <p className="text-18 mb-16">
          Expand the capabilities of <span className="font-bold">Roooby</span>{" "}
          with hundreds of apps and integrations
        </p>
        <div className="flex flex-wrap gap-2 mb-16 max-w-[1140px] mx-auto justify-center">
          {INTEGRATIONS_DATA.map((item, index) => (
            <div key={index} className="h-[120px] w-auto flex justify-center">
              <Image
                src={item.image}
                alt="/"
                height={120}
                width={item.width}
                style={{ objectFit: "cover" }}
                className="w-auto"
              />
            </div>
          ))}
        </div>
        <div className="text-2xl font-medium hover:underline transition-all">
          See all apps and extensions <span>{">"}</span>{" "}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
