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
import check from "../../public/check.svg";
import integration_icon_1 from "../../public/integration_icon_1.png";
import integration_icon_2 from "../../public/integration_icon_2.png";
import integration_icon_3 from "../../public/integration_icon_3.png";
import integration_icon_4 from "../../public/integration_icon_4.png";
import integration_icon_5 from "../../public/integration_icon_5.png";
import integration_icon_6 from "../../public/integration_icon_6.png";
import integration_icon_7 from "../../public/integration_icon_7.png";
import integration_icon_8 from "../../public/integration_icon_8.png";
import integration_icon_9 from "../../public/integration_icon_9.png";
import integration_icon_10 from "../../public/integration_icon_10.png";
import news_image_1 from "../../public/news_image_1.png";
import news_image_2 from "../../public/news_image_2.png";
import results_smal_oval_image_1 from "../../public/results_smal_oval_image_1.png";
import results_smal_oval_image_2 from "../../public/results_smal_oval_image_2.png";
import testimonials_smal_oval_image_1 from "../../public/testimonials_smal_oval_image_1.png";
import testimonials_smal_oval_image_2 from "../../public/testimonials_smal_oval_image_2.png";
import testimonials_smal_oval_image_3 from "../../public/testimonials_smal_oval_image_3.png";
import quotes from "../../public/quotes.png";

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
export const CHECK_ICON = check;
export const QUOTES_ICON = quotes;

export const NAV_MENU_ITEMS = [
  { name: "Product", path: "/products" },
  { name: "Pricing", path: "/pricing" },
  { name: "Company", path: "/company" },
  { name: "Blog", path: "/blog" },
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

export const INFO_DATA = [
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

export const INTEGRATIONS_DATA = [
  { image: integration_icon_1, width: 120 },
  { image: integration_icon_2, width: 288 },
  { image: integration_icon_3, width: 288 },
  { image: integration_icon_4, width: 120 },
  { image: integration_icon_5, width: 288 },
  { image: integration_icon_6, width: 372 },
  { image: integration_icon_7, width: 120 },
  { image: integration_icon_8, width: 120 },
  { image: integration_icon_9, width: 372 },
  { image: integration_icon_10, width: 120 }
];

export const NEWS_DATA = [
  {
    id: 1,
    tag: "service",
    image: news_image_1,
    title: "How To Deliver a Successful Product Launch",
    date: "05 Sep 2024",
    author: "Joshua Nash"
  },
  {
    id: 2,
    tag: "service",
    image: news_image_2,
    title: "What Makes an Authentic Employee Profile, and Why Does It Matter?",
    date: "07 Sep 2023",
    author: "Ivan Neshev"
  }
];

export const RESULTS_DATA = [
  {
    title: "$2.5 M",
    subTitle: "Generate sales",
    description:
      "Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    author: {
      image: results_smal_oval_image_1,
      name: "Nellie Foster",
      position: "Founder & CEO, Foster Business Strategies"
    }
  },
  {
    title: "45%",
    subTitle: "Grew revenue",
    description:
      "Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
    author: {
      image: results_smal_oval_image_2,
      name: "Lawrence Gibbs",
      position: "Marketing Director"
    }
  }
];

export const TESTIMONIALS_DATA = [
  {
    text: "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.",
    author: {
      image: testimonials_smal_oval_image_1,
      name: "Lola Ross",
      position: "Marketing Director"
    }
  },
  {
    text: "It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.",
    author: {
      image: testimonials_smal_oval_image_2,
      name: "Daisy Phelps",
      position: "Speaker and Author, Lifeiseasy"
    }
  },
  {
    text: "Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!",
    author: {
      image: testimonials_smal_oval_image_3,
      name: "Andrew Wilkins",
      position: "Managing Director, Nirma Studio"
    }
  }
];

export const PRISING_DATA = [
  {
    id: 1,
    name: "Starter",
    text: "Get organized and set up simple sales processes lorem ipsum",
    price: 8.9,
    perks: [
      "2 team members",
      "1,000 Contacts & Companies",
      "5 Campaign Workflows",
      "10 Nodes Per Campaign",
      "5 Automation Rules (Triggers)",
      "3 Plugins/Integrations",
      "Marketing Automation",
      "Custom Deal Tracks",
      "Automated Voicemails",
      "Post-call Automation"
    ]
  },
  {
    id: 2,
    name: "Professional",
    tag: "RECOMENDED",
    text: "Everything you need to boost performance and revenue lorem ipsum",
    price: 29.9,
    perks: [
      "10 team members",
      "2,500 Contacts & Companies",
      "5 Campaign Workflows",
      "10 Nodes Per Campaign",
      "5 Automation Rules (Triggers)",
      "3 Plugins/Integrations",
      "Marketing Automation",
      "Custom Deal Tracks",
      "Automated Voicemails",
      "Post-call Automation"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    text: "Customize without limits and access unrivaled support lorem ipsum",
    price: 39.9,
    perks: [
      "Unlimited team members",
      "5,000 Contacts & Companies",
      "25 Campaign Workflows",
      "20 Nodes Per Campaign",
      "15 Automation Rules (Triggers)",
      "10 Plugins/Integrations",
      "Marketing Automation",
      "Custom Deal Tracks",
      "Automated Voicemails",
      "Post-call Automation"
    ]
  }
];

export const FQA_DATA = [
  {
    question: "How Does Roooby CRM Compare To The Competition?",
    answer:
      "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing.",
    isOpen: false
  },
  {
    question: "Can I Change Plans Or Cancel My Subscription At Any Time?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis voluptates ex velit rerum repellendus, accusantium libero nisi! Voluptatum ipsum dolores placeat hic illum sequi amet aspernatur minus culpa quia?",
    isOpen: false
  },
  {
    question: "How Secure Is My Data With Roooby CRM?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum odit necessitatibus aut dicta? Mollitia modi culpa dolorum voluptates debitis facere architecto voluptatum dolor magni quaerat dolores impedit iusto vel eveniet, consectetur officiis quos tenetur ipsa amet rerum fugit unde nobis. Aliquam earum doloribus vitae provident? Tempore officia animi unde!",
    isOpen: false
  },
  {
    question: "What Is The Uptime Guarantee?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis deleniti tenetur earum autem error magnam ea numquam sit! Ipsam aspernatur asperiores incidunt. Beatae vero rerum odio unde atque vitae provident, iste iusto facere eaque repellendus labore? Iure nostrum odit esse aut nisi, sapiente maxime aspernatur beatae ullam? Esse possimus incidunt repellendus expedita repudiandae porro veritatis modi enim atque obcaecati.",
    isOpen: false
  },
  {
    question: "How Can I Add More Emails To My Account?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus aliquid quam commodi ea quis, voluptas ab quae quaerat iste cum error consectetur in suscipit amet veniam obcaecati modi! Voluptates ratione quidem eaque tenetur, voluptatum quasi voluptatibus quam dignissimos, placeat, nemo ut fuga iusto ducimus.",
    isOpen: false
  }
];

export const BLOG_HERO_MENU_ITEMS = [
  "All Articles",
  "Sales",
  "Marketing",
  "Service",
  "Product",
  "News"
];
