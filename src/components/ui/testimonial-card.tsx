import { QUOTES_ICON } from "@/lib/constants";
import Image from "next/image";
import Divider from "./divider";

type TestimonialCardProps = {
  text: string;
  author: {
    image: any;
    name: string;
    position: string;
  };
};

function TestimonialCard({ text, author }: TestimonialCardProps) {
  return (
    <li className="shadow-sm p-4 md:p-0 md:shadow-none">
      <div className="mb-10">
        <Image
          src={QUOTES_ICON}
          alt="Small quotes icon"
          width={45}
          height={45}
        />
      </div>
      <Divider />
      <div className="flex flex-col gap-8 min-h-[371px] justify-between">
        <p className="font-medium text-xl md:text-2xl md:leading-[34px] md:tracking-[0.33px] my-6">
          {text}
        </p>
        <div className="flex gap-2">
          <div>
            <Image
              src={author.image}
              alt={author.name}
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="font-bold">{author.name}</p>
            <p className="text-gray-custom-500">{author.position}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TestimonialCard;
