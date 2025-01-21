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
    link: "/events",
  },
  {
    title: "Contact",
    link: "/contact",
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
    url: "/creative.webp",
    alt: "creative",
    title: "Flexible Workspace Options",
  },
  {
    url: "/city.webp",
    alt: "city",
    title: "Central Location",
  },
  {
    url: "/office.webp",
    alt: "office",
    title: "Collaborative Environment",
  },
  {
    url: "/comfort.webp",
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
    url: "/co2.webp",
    alt: "room",
    title: "Private Offices",
    article:
      "Need more privacy? Our private offices are ideal for small teams or individuals who need a quiet space to focus. With personalized setups and secure access, these offices provide the perfect blend of comfort and professionalism.",
  },
  {
    url: "/co3.webp",
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
  subarticle: string;
  url: string;
}
const services: Services[] = [
  {
    title: "WorkSpace Options",
    article: "Flexible workspaces tailored for productivity and comfort.",
    subarticle:
      "Choose from various flexible workspaces that combine comfort with productivity. Whether you need a quiet corner or a lively collaborative area, we have options to suit your style. Our spaces are designed to adapt to your evolving work needs.",
    url: "/co4.webp",
  },
  {
    title: "Meeting Rooms",
    article: "Professional meeting rooms for seamless collaboration.",
    subarticle:
      "Our professional meeting rooms are perfect for hosting seamless collaborations. Equipped with state-of-the-art technology, these rooms are ideal for presentations, brainstorming sessions, and formal meetings. Book your space and elevate your meetings to the next level.",
    url: "/co6.webp",
  },
  {
    title: "Review Forums",
    article: "Engage in vibrant discussions and valuable feedback.",
    subarticle:
      "Engage with a vibrant community through our review forums, where ideas and feedback flow freely. Participate in discussions that can shape your projects and inspire new perspectives. Our forums are a hub of constructive dialogue and professional growth.",
    url: "/co7.webp",
  },
  {
    title: "Community Perks",
    article: "Exclusive perks that enrich your co-working experience.",
    subarticle:
      "Enjoy a range of exclusive perks designed to enhance your co-working experience. From networking events to special discounts, we offer benefits that go beyond the workspace. Connect with like-minded professionals and unlock opportunities through our community.",
    url: "/co8.webp",
  },
  {
    title: "High-Speed Wi-Fi",
    article: "Blazing-fast Wi-Fi to keep you connected always.",
    subarticle:
      "Stay connected with our reliable, high-speed Wi-Fi, ensuring uninterrupted work throughout your day. Whether you’re streaming a conference call or uploading large files, our internet speed supports all your digital needs. Work efficiently and stay productive with a robust connection.",
    url: "/co9.webp",
  },
  {
    title: "Coffee/Tea & Snacks",
    article: "Complimentary refreshments to fuel your day.",
    subarticle:
      "Refresh yourself with complimentary coffee, tea, and snacks available throughout the day. Our pantry is stocked to keep you energized and focused. Take a break and recharge with our selection of beverages and light refreshments.",
    url: "/co10.webp",
  },
  {
    title: "Printing / Scanning",
    article: "Quick and easy access to printing and scanning.",
    subarticle:
      "Access our quick and efficient printing and scanning services for all your document needs. Whether you need to print a report or scan a contract, our facilities are at your disposal. Enjoy seamless operations with our on-site support.",
    url: "/co11.webp",
  },
  {
    title: "Virtual Office",
    article: "Establish a prestigious business address virtually.",
    subarticle:
      "Establish a prestigious business address with our virtual office services. Enjoy the benefits of a physical office without the overhead costs. Enhance your business presence and credibility while managing your operations remotely.",
    url: "/co12.webp",
  },
];

interface Events {
  title: string;
  article: string;
  url: string;
}
const events: Events[] = [
  {
    title: "Product Launches",
    article:
      "Discover innovative products and enjoy exclusive previews at our exciting launch events.",
    url: "/co14.webp",
  },
  {
    title: "Hackathon",
    article:
      "Join us for a fast-paced hackathon where you can build creative solutions in just 48 hours.",
    url: "/co13.webp",
  },
  {
    title: "Networking",
    article:
      "Connect with industry leaders and like-minded professionals to open doors to new opportunities.",
    url: "/ko13.webp",
  },
  {
    title: "Workshop",
    article:
      "Sharpen your skills in hands-on sessions covering everything from coding to design.",
    url: "/co15.webp",
  },
  {
    title: "Startup Pitch Night",
    article:
      "Watch entrepreneurs pitch their ideas and get inspired by the next big thing in business.",
    url: "/co17.webp",
  },
];

export {
  navLinks,
  iconsHome,
  conditionsHome,
  articlessHome,
  values,
  packages,
  services,
  events,
};
