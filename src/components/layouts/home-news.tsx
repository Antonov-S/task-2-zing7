import { NEWS_DATA } from "@/lib/constants";
import Link from "next/link";
import ArticleCard from "../ui/article-card";

function News() {
  return (
    <section className="w-full bg-white mt-26">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center pb-10">
          <h2 className="font-bold text-4xl md:text-[64px] md:tracking-[0.69px] md:leading-[74px]">
            What`s new at Roooby?
          </h2>
          <div className="text-xl font-medium tracking-[0.43px] hover:underline transition-all">
            <Link href="/blog">
              See all <span className="text-[#00CC61]">{">"}</span>{" "}
            </Link>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4 pt-8">
          {NEWS_DATA.map(news => (
            <ArticleCard key={news.id} {...news} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default News;
