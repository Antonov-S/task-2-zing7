import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

import { cn } from "@/lib/utils";
import {
  FACEBOOK_ICON,
  LANGUAGE_ICON,
  LINKEDIN_ICON,
  NAV_LOGO,
  TWITTER_ICON
} from "@/lib/constants";

type MainFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};

const sections = [
  {
    name: "Company",
    links: [
      { name: "About", href: "#", target: "_self" },
      { name: "Pricing", href: "#", target: "_self" },
      { name: "Jobs", href: "#", target: "_self" },
      { name: "Blog", href: "#", target: "_self" },
      { name: "Careers", href: "#", target: "_self" }
    ]
  },
  {
    name: "Product",
    links: [
      { name: "Sales software", href: "#", target: "_self" },
      { name: "Features", href: "#", target: "_self" },
      { name: "Privacy", href: "#", target: "_self" },
      { name: "Marketplace", href: "#", target: "_self" },
      { name: "Status", href: "#", target: "_self" },
      { name: "API", href: "#", target: "_self" }
    ]
  },
  {
    name: "Discover",
    links: [
      { name: "Partner Program", href: "#", target: "_self" },
      { name: "Get our newsletter", href: "#", target: "_self" },
      { name: "Sales pipeline", href: "#", target: "_self" },
      { name: "What is CRM?", href: "#", target: "_self" },
      { name: "CRM Comparison", href: "#", target: "_self" },
      { name: "Resources", href: "#", target: "_self" }
    ]
  },
  {
    name: "Help Center",
    links: [
      { name: "Community", href: "#", target: "_self" },
      { name: "Knowledge Basis", href: "#", target: "_self" },
      { name: "Academy", href: "#", target: "_self" },
      { name: "Support", href: "#", target: "_self" }
    ]
  }
];

const footerLinks = [
  { name: "Terms of Service", href: "#", target: "_self" },
  { name: "Privacy Policy", href: "#", target: "_self" },
  { name: "Cookies", href: "#", target: "_self" }
];

export default function Footer(props: MainFooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      {...props}
      className={cn("border-t py-2 mt-[120px]", props?.className)}
    >
      <div className="container flex md:flex-row flex-col justify-between">
        <section>
          <Link href={"/"} className="font-black text-[25px] leading-[28px]">
            Roooby
          </Link>
          <address className="not-italic body opacity-90 mt-[26px]">
            <p>
              We build an elegant solution. <br />
              Our team created a fully integrated <br />
              sales and marketing solution for SMBs
            </p>
            <div className="flex my-6 max-w-[104px]">
              <Image
                src={TWITTER_ICON}
                alt="Twitter logo"
                width={24}
                height={24}
                className="mr-4 w-6 h-6"
              />
              <Image
                src={FACEBOOK_ICON}
                alt="Facebook logo"
                width={24}
                height={24}
                className="mx-4 w-6 h-6"
              />
              <Image
                src={LINKEDIN_ICON}
                alt="Linkedin logo"
                width={24}
                height={24}
                className="mx-4 w-6 h-6"
              />
            </div>
          </address>
        </section>
        <nav className="grid xs:grid-cols-2 gap-4 md:gap-0 md:flex items-start justify-between w-full max-w-[768px]">
          {sections?.map(section => (
            <section
              key={section.name}
              className="flex flex-col text-xs md:text-[14px] md:leading-[34px]"
            >
              <h2 className="headline-h5 font-bold my-1">{section?.name}</h2>
              <ul>
                {section?.links?.map((link, i) => (
                  <li key={i} className="mt-[2px] md:mt-1">
                    <Link
                      className="body"
                      href={link.href}
                      target={link.target}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center mb-[47px] mt-[45px]">
        <p className="text-[14px] font-normal text-black/90">
          &copy; Copyright {currentYear}
        </p>
        <ul className="flex mx-[496px] max-w-[368px] max-h-[17px] items-center justify-center">
          {footerLinks.map((link, i) => (
            <li key={i} className="mx-[38px]">
              <Link href={link.href} target={link.target}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row">
          <Image
            src={LANGUAGE_ICON}
            alt="Language icon"
            width={24}
            height={24}
          />
          <p className="flex flex-row">
            English <FaAngleDown />
          </p>
        </div>
      </div>
    </footer>
  );
}
