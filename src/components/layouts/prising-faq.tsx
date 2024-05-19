"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { FQA_DATA } from "@/lib/constants";

function FAQ() {
  const [faqs, setFaqs] = useState(FQA_DATA);

  const toggleAccordion = (index: number) => {
    setFaqs(prevFaqs =>
      prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-5 -mb-28 md:mb-40 bg-white min-h-screen">
      <div className="flex flex-col md:items-start items-center text-center md:text-left">
        <h2 className="font-bold text-3xl md:text-6xl mt-10 md:mt-32 tracking-tight">
          Frequently asked
          <br />
          questions
        </h2>
      </div>
      <div className="mt-5 max-w-4xl mx-auto md:mr-8">
        <div className="py-5">
          {faqs.map((faq, index) => (
            <div key={index}>
              <hr className=" mt-5 md:mt-10 mb-7 md:mb-14 my-4 border-gray-custom-300" />
              <div className="outline-none">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-xl md:text-3xl text-black">
                    {faq.question}
                  </span>
                  <span>
                    {faq.isOpen ? (
                      <FaMinus className="text-gray-custom-300 text-xl md:text-2xl font-bold " />
                    ) : (
                      <FaPlus className="text-gray-custom-300 text-xl md:text-2xl font-bold " />
                    )}
                  </span>
                </div>
                <div className={`${faq.isOpen ? "block" : "hidden"}`}>
                  <p className="text-black text-lg md:text-xl mt-6 md:mt-10 pb-2 group-open:animate-fadeIn">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
