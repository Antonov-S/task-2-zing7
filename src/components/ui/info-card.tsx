import Image from "next/image";

import { CHECK_ICON } from "@/lib/constants";
import InfoButton from "./info-button";

type InfoCardProps = {
  id: number;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: any;
  cta?: string;
};

function InfoCard({
  id,
  tag,
  title,
  description,
  points,
  image,
  cta
}: InfoCardProps) {
  return (
    <article className="mx-auto my-[120px] border-t border-black/10">
      <div className="grid grid-cols-1 content-center gap-12 lg:grid-cols-2 mt-12">
        {id % 2 !== 0 ? (
          <>
            <div className="flex flex-col justify-end lg:max-w-[500px]">
              <span className="uppercase text-sm font-bold tracking-[1.4px] text-gray-custom-500 bg-yellow self-start inline-flex p-1 mb-4">
                {tag}
              </span>
              <h2 className="text-5xl font-bold leading-[58px] tracking-[-0.67px] mb-8">
                {title}
              </h2>
              <p className="mb-6 text-lg">{description}</p>
              <ul className="mb-6">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-4 items-baseline mb-4 text-lg tracking-[0.2px]"
                  >
                    <Image src={CHECK_ICON} alt="/" width={20} height={20} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-[555px] max-h-[555px] max-lg:order-1 relative">
              <Image src={image} alt={title} width={555} height={555} />
              {cta && (
                <div className="bg-accent text-white text-lg font-bold tracking-[-0.25px] pl-3 py-[9px] rounded-xl max-w-[457px] mx-auto absolute bottom-8 left-0 right-0">
                  {cta}
                  <InfoButton
                    label="Start now"
                    bgColor="bg-green"
                    borderColor="border-green"
                    className="py-[14px] px-[16px] ml-[35px] tracking-[-0.25px] hover:border-white"
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="w-full max-w-[555px] max-h-[555px] max-lg:order-1 relative">
              <Image
                src={image}
                alt={title}
                width={555}
                height={555}
                className="w-555 h-auto"
              />
              {cta && (
                <div className="bg-accent text-white text-lg font-bold tracking-[-0.25px] pl-3 py-[9px] rounded-xl max-w-[457px] mx-auto absolute bottom-8 left-0 right-0">
                  {cta}
                  <InfoButton
                    label="Start now"
                    bgColor="bg-green"
                    borderColor="border-green"
                    className="py-[14px] px-[16px] ml-[35px] tracking-[-0.25px] hover:border-white"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col justify-end lg:max-w-[500px]">
              <span className="uppercase text-sm font-bold tracking-[1.4px] text-gray-custom-500 bg-yellow self-start inline-flex p-1 mb-4">
                {tag}
              </span>
              <h2 className="text-5xl font-bold leading-[58px] tracking-[-0.67px] mb-8">
                {title}
              </h2>
              <p className="mb-6 text-lg">{description}</p>
              <ul className="mb-6">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-4 items-baseline mb-4 text-lg tracking-[0.2px]"
                  >
                    <Image src={CHECK_ICON} alt="/" width={20} height={20} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>{" "}
          </>
        )}
      </div>
    </article>
  );
}

export default InfoCard;
