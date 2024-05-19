import Image from "next/image";

import { BLOG_MARKETING_MAIN_IMAGE } from "@/lib/constants";

function BlogMarketing() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row w-full md:space-x-20">
          <div className="flex flex-col justify-around w-80 mx-auto lg:w-1/2">
            <hr className="border-gray-custom-300" />
            <p className="text-gray-custom-300 mt-6">SERVICE</p>
            <h2 className="text-3xl md:text-4xl text-left font-bold pt-4 mb-6 md:mb-36 leading-tight">
              The 2024 State of Marketing &amp; Trends Report: Data from 1400+
              Global Marketers
            </h2>
            <p className="text-black text-sm md:text-base font-bold mb-6">
              <span> 05 Sep 2024,</span>
              <span className="text-gray-custom-300 ml-2">
                {" "}
                by Maxwell Iskiev
              </span>
            </p>
            <hr className="border-gray-custom-300" />
          </div>

          <div className="md:w-1/2">
            <Image
              src={BLOG_MARKETING_MAIN_IMAGE}
              width={555}
              height={370}
              alt="Large Marketing image"
              className="w-full h-auto my-2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogMarketing;
