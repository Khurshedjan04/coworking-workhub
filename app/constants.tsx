import { Interface } from "readline";

interface NavLink {
  title: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "/service",
  },
  {
    title: "Events",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
];

interface IconHome {
  url: string;
  alt: string;
  title: string;
}

const iconsHome: IconHome[] = [
  {
    url: "https://img.icons8.com/ios-glyphs/90/table.png",
    alt: "desk",
    title: "Hot Desks",
  },
  {
    url: "https://img.icons8.com/ios-glyphs/90/1A1A1A/home-office.png",
    alt: "home-office",
    title: "Dedicated Desks",
  },
  {
    url: "https://img.icons8.com/ios-glyphs/90/1A1A1A/office.png",
    alt: "office",
    title: "Private Desks",
  },
  {
    url: "https://img.icons8.com/ios-glyphs/90/1A1A1A/meeting-room.png",
    alt: "meeting-room",
    title: "Meeting Rooms",
  },
  {
    url: "https://img.icons8.com/ios-glyphs/90/1A1A1A/people-working-together.png",
    alt: "people-working-together",
    title: "Review Forums",
  },
  {
    url: "https://img.icons8.com/ios-filled/90/1A1A1A/volunteering.png",
    alt: "volunteering",
    title: "Community Perks",
  },
];
interface ConditionHome {
  url: string;
  alt: string;
  title: string;
}

const conditionsHome: ConditionHome[] = [
  {
    url: "/creative.png",
    alt: "creative",
    title: "Flexible Workspace Options",
  },
  {
    url: "/city.png",
    alt: "city",
    title: "Central Location",
  },
  {
    url: "/office.png",
    alt: "office",
    title: "Collaborative Environment",
  },
  {
    url: "/comfort.png",
    alt: "cozy",
    title: "Premium Amenities",
  },
];
interface ArticleHome {
  url: string;
  alt: string;
  title: string;
  article: string;
}
const articlessHome: ArticleHome[] = [
  {
    url: "/co1.webp",
    alt: "creative",
    title: "Desks for Every need",
    article:
      "Whether you prefer a flexible hot desk or a dedicated space just for you, WorkHub Central offers a variety of desk options to fit your work style. Our ergonomic and well-designed desks are perfect for individuals looking for a productive environment in a collaborative setting.",
  },
  {
    url: "/co2.jpeg",
    alt: "room",
    title: "Private Offices",
    article:
      "Need more privacy? Our private offices are ideal for small teams or individuals who need a quiet space to focus. With personalized setups and secure access, these offices provide the perfect blend of comfort and professionalism.",
  },
  {
    url: "/co3.jpg",
    alt: "office",
    title: "Quiet Areas and Brainstorming Zones",
    article:
      "We understand the need for balance. Our quiet areas offer a peaceful retreat for focused work, while our brainstorming zones are designed to inspire creativity and collaboration. These spaces are equipped with everything you need to switch  between deep thinking and innovative teamwork.",
  },
];
interface Values {
  title: string;
  article: string;
}
const values: Values[] = [
  {
    title: "Our Value",
    article:
      "We value innovation, community, and flexibility, providing spaces that inspire collaboration and productivity.",
  },
  {
    title: "Our Mission",
    article:
      "To empower professionals with dynamic co-working spaces that foster growth, connection, and innovation.",
  },
];
interface Packages {
  title: string;
  article: string[];
  price: number;
}
const packages: Packages[] = [
  {
    title: "Day Pass",
    article: [
      "Book of the month",
      "Access to one review forum and discussion group",
      "Bookmark and drinks mug",
      "Refreshments:1 - box of coffee or tea.",
    ],
    price: 199,
  },
  {
    title: "Flex Membership ",
    article: [
      "10 days of hot desk access per month",
      "Discounts on meeting room bookings and workshops",
    ],
    price: 299,
  },
  {
    title: "Dedicated desk membership",
    article: [
      "Locker for personal storage",
      "Book of the month and three own choice books",
      "Permanent desk in a shared workspace",
      "Priority access to meeting rooms and events",
    ],
    price: 499,
  },
  {
    title: "Private office membership",
    article: [
      "Private office space for 2-10 people",
      "Personalized office setup options",
      "Full 24/7 access with unlimited use of meeting rooms",
    ],
    price: 699,
  },
];
interface Services {
  title: string;
  article: string;
  url: string;
}
const services: Services[] = [
    {
      title: "WorkSpace Options",
      article: "Flexible workspaces tailored for productivity and comfort.",
      url: "/co4.jpg",
    },
    {
      title: "Meeting Rooms",
      article: "Professional meeting rooms for seamless collaboration.",
      url: "/co6.jpeg",
    },
    {
      title: "Review Forums",
      article: "Engage in vibrant discussions and valuable feedback.",
      url: "/co7.webp",
    },
    {
      title: "Community Perks",
      article: "Exclusive perks that enrich your co-working experience.",
      url: "/co8.jpg",
    },
    {
      title: "High Speed Wi-Fi",
      article: "Blazing-fast Wi-Fi to keep you connected always.",
      url: "/co9.jpeg",
    },
    {
      title: "Coffee/Tea & Snacks",
      article: "Complimentary refreshments to fuel your day.",
      url: "/co10.jpg",
    },
    {
      title: "Printing / Scanning",
      article: "Quick and easy access to printing and scanning.",
      url: "/co11.jpg",
    },
    {
      title: "Virtual Office",
      article: "Establish a prestigious business address virtually.",
      url: "/co12.jpg",
    },
  ];
  
export { navLinks, iconsHome, conditionsHome, articlessHome, values, packages, services };
