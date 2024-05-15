import Image from "next/image";
import Divider from "./divider";

type ResultCardProps = {
  title: string;
  subTitle: string;
  description: string;
  author: {
    image: any;
    name: string;
    position: string;
  };
};

function ResultCard({ title, subTitle, description, author }: ResultCardProps) {
  return (
    <li className="py-6">
      <Divider />
      <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-2 py-6">
        <div>
          <h2 className="text-2xl md:text-[72px] md:leading-[74px] font-bold tracking[-1px] pb-4">
            {title}
          </h2>
          <p className="text-xl font-bold">{subTitle}</p>
        </div>
        <div>
          <p className="text-xl md:text-[30px] md:leading-[42px] tracking-[-0.44px] font-medium pb-4">
            {description}
          </p>
          <div className="flex gap-2">
            <div>
              <Image
                src={author.image}
                alt={author.name}
                width={50}
                height={50}
                className="w-[50px] h-auto"
              />
            </div>
            <div>
              <p className="font-bold">{author.name}</p>
              <p className="text-gray-custom-500">{author.position}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ResultCard;
