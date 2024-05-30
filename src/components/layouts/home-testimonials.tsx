import { TESTIMONIALS_DATA } from "@/lib/constants";
import Link from "next/link";
import TestimonialCard from "../ui/testimonial-card";

function Testimonials() {
  return (
    <section className="w-full bg-smoke py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-baseline pb-16">
          <h3 className="font-bold text-3xl tracking-[0.69px] sm:text-[48px] sm:leading-[58px] sm:tracking-[0.67px] md:max-w-[570px] pb-2">
            We love our Customers and They love us too
          </h3>
          <div className="text-xl font-medium tracking-[0.43px] hover:underline transition-all">
            <Link href="/">
              See all <span className="text-[#00CC61]">{">"}</span>{" "}
            </Link>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
