import { INTEGRATIONS_DATA } from "@/lib/constants";
import Image from "next/image";

function Integrations() {
  return (
    <section className="w-full bg-smoke py-6 md:py-10 px-4 md:mb-16">
      <div className="w-full mx-auto text-center">
        <h3 className="text-5xl leading-[68px] tracking-[-0.67px] font-bold mb-4">
          Over 300+ integrations
        </h3>
        <p className="text-18 mb-16">
          Expand the capabilities of <span className="font-bold">Roooby</span>{" "}
          with hundreds of apps and integrations
        </p>
        <div className="flex flex-wrap gap-2 mb-16 max-w-[1140px] mx-auto md:justify-center">
          {INTEGRATIONS_DATA.map((item, index) => (
            <div
              key={index}
              className="w-[372px] h-[120px] bg-white object-contain md:w-auto flex justify-center"
            >
              <Image
                src={item.image}
                alt="/"
                height={120}
                width={item.width}
                className="w-full md:w-auto h-auto md:h-[120px] object-contain"
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
