import Image, { StaticImageData } from "next/image";

function BenefitCard({
  card
}: {
  card: {
    id: number;
    icon: StaticImageData;
    heading: string;
    description: string;
  };
}) {
  return (
    <figure className="group h-full rounded-xl bg-accent px-4 py-8 text-white drop-shadow-2xl transition-all duration-500 hover:-translate-y-[10px] hover:cursor-pointer hover:bg-yellow lg:px-8 lg:py-16">
      <Image
        src={card.icon}
        alt="Icon"
        className="mb-8 group-hover:invert lg:mb-14"
      />
      <div className="grid grid-cols-10 border-t border-opacity-[24%] py-4 group-hover:border-opacity-100 group-hover:invert">
        <h3 className="col-start-1 col-end-10 mb-[14px] text-xl font-bold tracking-[0.28px] lg:col-end-10">
          {card.heading}
        </h3>
        <p className="col-start-1 col-end-10 leading-[26px] lg:col-end-10">
          {card.description}
        </p>
      </div>
    </figure>
  );
}

export default BenefitCard;
