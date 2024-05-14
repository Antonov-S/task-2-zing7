import Image from "next/image";
import Divider from "./divider";

type ArticleCardProps = {
  id: number;
  tag: string;
  image: any;
  title: string;
  date: string;
  author: string;
};

function ArticleCard({
  id,
  tag,
  image,
  title,
  date,
  author
}: ArticleCardProps) {
  return (
    <li>
      <p className="uppercase font-bold text-sm text-[#787878] tracking-[1.4px]">
        {tag}
      </p>
      <Divider />
      <Image
        src={image}
        alt={title}
        width={555}
        height={370}
        className="w-full h-auto my-4 md:my-6"
      />
      <h3 className="font-bold text-2xl text-wrap md:text-[32px] md:leading-[42px] md:tracking-[0.44px] py-4">
        {title}
      </h3>
      <p>
        <span className="font-medium">{date}, </span>
        <span>by {author}</span>
      </p>
    </li>
  );
}

export default ArticleCard;
