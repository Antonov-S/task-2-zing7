"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  CLIENTS_AND_PARTNERS_LOGOS,
  CONTACTS_MAP_IMAGE
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    toast.success("Thank you for your message!");
  };

  return (
    <section>
      <div className="bg-smoke w-full">
        <div className="bg-smoke container mx-auto py-8 px-4 sm:px-8">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:pb-14 md:-mt-14">
            <br />
            Get in touch with
            <br />
            our lovely team
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-20">
            <div className="w-full md:w-2/5 mb-4 md:mb-36">
              <h2 className="text-black font-bold text-2xl">
                Roooby Technologies
              </h2>
              <p className="text-silver text-lg pt-1">
                Plovdiv, Bulgaria, bul Vasil Levski 96
              </p>
              <div className="h-48 md:h-72 mt-8">
                <Image
                  src={CONTACTS_MAP_IMAGE}
                  alt="Image of a google map"
                  width={458}
                  height={288}
                  priority
                  className="w-[458px] h-auto"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between pt-8 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-start border-l-2 border-gray pl-4">
                  <span className="text-black text-xl font-bold">General</span>
                  <span className="text-silver text-xl">hello@me.com</span>
                </div>
                <div className="flex flex-col items-start border-l-2 border-gray pl-4">
                  <span className="text-black text-xl font-bold">Support</span>
                  <span className="text-silver text-xl">support@me.com</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5">
              <form
                className="px-4 md:px-8 pt-8 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <div className="mb-6">
                  <input
                    className="shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="shadow appearance-none rounded-lg w-full py-3 md:py-16 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 bg-green text-white font-bold hover:text-white hover:bg-accent py-4 px-10 rounded-lg"
                  >
                    <span className="text-center">Send message</span>
                    <span>&gt;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full">
        <div className="bg-white container mx-auto py-8 px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between md:my-24">
            <span className="font-medium text-base md:tracking-tight">
              Our clients and partners:
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
      </div>
    </section>
  );
};

export default ContactForm;
