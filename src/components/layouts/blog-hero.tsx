import Link from "next/link";

import { BLOG_HERO_MENU_ITEMS } from "@/lib/constants";

function BlogHero() {
  return (
    <section className="w-full bg-smoke pt-24 md:pt-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-between items-baseline pb-16">
          <div>
            <h1 className="text-black text-center md:text-left text-3xl md:text-[3.9rem] font-bold leading-tight ">
              News and insights
              <br />
              <span className="text-gray-custom-300">from our experts</span>
            </h1>
          </div>
          <div className="pt-12 md:pt-24 mx-auto md:mx-0">
            <ul className="flex md:flex-row md:justify-around flex-col md:flex-wrap">
              {BLOG_HERO_MENU_ITEMS.map((item, index) => (
                <Link href={item.path}>
                  <li
                    key={index}
                    className="text-black text-md pb-4 font-semibold cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-green md:w-auto w-full md:px-4 text-center"
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
