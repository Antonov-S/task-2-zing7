"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  HOME_DIAGRAM,
  HOME_H1_TITLE,
  HOME_P_ADVERTISING_ETXT
} from "@/lib/constants";
import { Button } from "../ui/button";

function Homepage() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    toast.success("Thank you for subscribing.");
    setEmail("");
  }
  return (
    <section className="container relative flex-col md:flex content-between mx-2.5 md:mx-0 mt-5 md:mt-20 overflow-hidden">
      <div className="relative">
        <h1 className="max-w-[642px] md:font-bold font-medium md:leading-[74px] md:tracking-[-0.89px] md:text-[64px] text-xl">
          {HOME_H1_TITLE}
        </h1>
        <p className="max-w-[478px] mt-10 text-sm md:text-lg">
          {HOME_P_ADVERTISING_ETXT}
        </p>
        <form
          className="mt-[60px] max-w-[457px] w-full h-[72px] relative"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            className="w-full h-full px-6 rounded-xl border-[#EDEDED] border-[1px] placeholder:text-lg placeholder:font-medium placeholder:text-[#787878]"
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
            className="!h-[56px] !text-lg !font-bold !rounded-lg !absolute !top-[8px] !right-[8px] max-sm:!static max-sm:!mt-2 max-sm:!w-full"
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
        className="absolute top-[70px] -right-[215px] max-xl:static max-xl:self-center max-sm:mt-[70px]"
      />
    </section>
  );
}

export default Homepage;
