"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  CLIENTS_AND_PARTNERS_LOGOS,
  CLIENTS_LOGOS,
  HOME_DIAGRAM,
  HOME_H1_TITLE,
  HOME_P_ADVERTISING_ETXT
} from "@/lib/constants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function Homepage() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    toast.success("Thank you for subscribing.");
    setEmail("");
  }
  return (
    <section className="container px-4 pb-24">
      <div className="relative flex-col md:flex md:content-between md:mx-0 md:mt-20">
        <div className="h-[475px] md:h-[675px]">
          <h1 className="max-w-[642px] text-[64px] font-bold tracking-[-0.89px] leading-[74px] max-sm:text-[40px] max-sm:leading-[50px]">
            {HOME_H1_TITLE}
          </h1>
          <p className="max-w-[378px] md:max-w-[478px] mt-7 md:mt-10 text-sm md:text-lg">
            {HOME_P_ADVERTISING_ETXT}
          </p>
          <form
            className="mt-[30px] md:mt-[60px] max-w-[457px] w-full h-[72px] relative"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              className="w-full h-full rounded-xl border-[#EDEDED] border-[1px] placeholder:text-lg sm:placeholder:font-medium placeholder:text-[#787878]"
              placeholder="Enter your email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              required
            />
            <p className="ml-4 mt-2 text-sm text-[#404040] text-left">
              Full access. No credit card required.
            </p>
            <Button
              variant={"secondary"}
              className="absolute !h-[56px] !text-lg !font-bold !rounded-lg !top-[8px] !right-[8px]"
            >
              Try for Free
            </Button>
          </form>
        </div>

        <Image
          src={HOME_DIAGRAM}
          width={482}
          height={675}
          alt="Large diagram image"
          className="static my-5 md:absolute md:top-0 md:bottom-0 md:-right-80 h-auto w-auto"
          priority
        />

        <div className="flex flex-col md:flex-row items-center justify-between md:my-24">
          <span className="font-medium text-base md:tracking-tight">
            Trusted by 1,000+ customers
          </span>
          <span>
            <ul className="flex flex-col md:flex-row gap-y-8 md:gap-x-16 mt-6 items-center justify-center">
              {CLIENTS_AND_PARTNERS_LOGOS.map((logo, index) => (
                <li key={index}>
                  <Image
                    src={logo.image}
                    alt="Logo image"
                    width={logo.width}
                    priority
                    className={cn("h-auto", `w-[${logo.width}px]`)}
                  />
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
