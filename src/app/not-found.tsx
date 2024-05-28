"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import { UNDER_CONSTRUCTION_IMAGE } from "@/lib/constants";

export default function NotFound() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: ""
    });
    toast.success("Will be in touch!");
  };

  return (
    <section className="bg-smoke w-full">
      <div className="bg-smoke container mx-auto py-8 px-4 sm:px-8">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 md:pb-14">
          <br />
          We'll Be Back Soon
          <br />A little more patience...
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-20">
          <div className="w-full md:w-2/4 mb-4 md:mb-36">
            <p className="text-silver text-lg pt-1">
              For now, this section of the website is under construction. We are
              doing our best to present the new website version very soon. You
              can leave your name and email to be among first customers to be
              notified about the release.
            </p>
            <div className="h-48 md:h-72 mt-8">
              <Image
                src={UNDER_CONSTRUCTION_IMAGE}
                alt="Image of a google map"
                width={555}
                height={462}
                priority
                className="w-[555px] h-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-2/4">
            <form
              className="px-4 my-4 md:px-8 pt-8 pb-8 mb-4"
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
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-left w-full md:!w-2/4 bg-green text-white font-bold hover:text-white hover:bg-accent py-4 px-3 rounded-lg"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
