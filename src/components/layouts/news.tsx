import { NEWS_DATA } from "@/lib/constants";
import Link from "next/link";
import ArticleCard from "../ui/article-card";

function News() {
  return (
    <section className="container mx-auto px-4 py-24 xl:py-32">
      <div className="flex justify-between items-center pb-10">
        <h2 className="font-bold text-4xl tracking-[0.69px] sm:text-[64px] sm:leading-[74px] sm:tracking-[0.89px]">
          What`s new at Roooby?
        </h2>
        <div className="text-xl font-medium tracking-[0.43px] hover:underline transition-all">
          <Link href="/">
            See all <span className="text-[#00CC61]">{">"}</span>{" "}
          </Link>
        </div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-4 pt-8">
        {NEWS_DATA.map(news => (
          <ArticleCard key={news.id} {...news} />
        ))}
      </ul>
    </section>
  );
}

export default News;
