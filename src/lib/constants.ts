import roooby from "../../public/roooby.svg";
import diagram from "../../public/home-diagram.png";
import clients from "../../public/clients-logos.png";
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import linkedin from "../../public/linkedin.png";
import ic_language from "../../public/ic_language.png";
import face from "../../public/face.png";
import laptop from "../../public/laptop.png";
import wand from "../../public/wand.png";
import info_pic_1 from "../../public/info_pic_1.svg";
import info_pic_2 from "../../public/info_pic_2.svg";
import info_pic_3 from "../../public/info_pic_3.svg";

export const NAV_LOGO = roooby;
export const HOME_DIAGRAM = diagram;
export const CLIENTS_LOGOS = clients;
export const TWITTER_ICON = twitter;
export const FACEBOOK_ICON = facebook;
export const LINKEDIN_ICON = linkedin;
export const LANGUAGE_ICON = ic_language;
export const INFO_PIC_1 = info_pic_1;
export const INFO_PIC_2 = info_pic_2;
export const INFO_PIC_3 = info_pic_3;

export const NAV_MENU_ITEMS = [
  { name: "Product", path: "/products" },
  { name: "Pricing", path: "/pricing" },
  { name: "Company", path: "/company" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" }
];

export const NAV_MENU_BUTTONS = [
  {
    name: "Log In",
    path: "/login"
  },
  {
    name: "Try for free",
    path: "/free"
  }
];

export const NAV_MOBILE_MENU = [
  { name: "Product", path: "/products" },
  { name: "Pricing", path: "/pricing" },
  { name: "Company", path: "/company" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
  { name: "Log In", path: "/login" },
  { name: "Try for free", path: "/free" }
];

export const HOME_H1_TITLE =
  "Bringing companies and customers together, anywhere";

export const HOME_P_ADVERTISING_ETXT =
  "An awesome & powefull tools for your business, incease business revenue with enterprise-grade links build to acquire and engage customers.";

export const BENEFITS_DATA = [
  {
    id: 1,
    icon: face,
    heading: "Lead customers to happiness",
    description:
      "Rooody Support helps you provide personalized support when and where customers need it, so customers stay happy."
  },
  {
    id: 2,
    icon: laptop,
    heading: "Support your support",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers."
  },
  {
    id: 3,
    icon: wand,
    heading: "Grow without growing pains",
    description:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow."
  }
];

export const FOOTER_SECTIONS_DATA = [
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

export const FOOTER_LINKS_DATA = [
  { name: "Terms of Service", href: "#", target: "_self" },
  { name: "Privacy Policy", href: "#", target: "_self" },
  { name: "Cookies", href: "#", target: "_self" }
];

export const info = [
  {
    id: 1,
    tag: "sales",
    title: "Increase company revenue up to 65%",
    description:
      "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.",
    points: [
      "Close more deals with single-page contact management",
      "Enjoy one-click calling, call scripts and voicemail automation",
      "Track stages and milestones of your deals to keep the sales process on track"
    ],
    image: INFO_PIC_1
  },
  {
    id: 2,
    tag: "marketing",
    title: "Marketing",
    description:
      "Market like the most successful companies in the world with Agile CRM's marketing automation software.",
    points: [
      "Marketing workflows with an easy drag-and-drop designer",
      "Use our templates to create high converting, mobile responsive landing pages",
      "Integrate social media easily into your marketing campaigns & contact views"
    ],
    image: INFO_PIC_2,
    cta: "Automate your sales & marketing"
  },
  {
    id: 3,
    tag: "service",
    title: "Help Desk Software",
    description:
      "Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.",
    points: [
      "Resolve every issue in the shortest possible time with powerful ticketing features",
      "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
      "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard"
    ],
    image: INFO_PIC_3
  }
];
