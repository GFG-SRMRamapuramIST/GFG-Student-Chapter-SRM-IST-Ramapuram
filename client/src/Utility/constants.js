import { AakashPic, AbhishekPic, RachitPic, SanjanaPic } from "../assets";

export const roles = {
  President: "President",
  VicePresident: "Vice President",
  OpsHead: "Operational Head",
  TechHead: "Technical Head",
};

// ***** CORE TEAM *****
export const CoreTeam24 = {
  [roles.President]: {
    name: "Aakash Kumar Yadav",
    role: roles.President,
    image: AakashPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/aakash-kumar-yadav/",
      codolio: "https://codolio.com/aakash_ky",
      // twitter: "https://twitter.com/aakash_ky",
      // instagram: "https://www.instagram.com/aakash_ky/",
    },
  },
  [roles.VicePresident]: {
    name: "Sanjana Jaldu",
    role: roles.VicePresident,
    image: SanjanaPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/sanjana-jaldu/",
      codolio: "https://codolio.com/sanjana_jaldu",
      // twitter: "https://twitter.com/sanjana_jaldu",
      // instagram: "https://www.instagram.com/sanjana_jaldu/",
    },
  },
  [roles.OpsHead]: {
    name: "Rachit Dhaka",
    role: roles.OpsHead,
    image: RachitPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/rachit-dhaka/",
      codolio: "https://codolio.com/rachit_dhaka",
      // twitter: "https://twitter.com/rachit_dhaka",
      // instagram: "https://www.instagram.com/rachit_dhaka/",
    },
  },
  [roles.TechHead]: {
    name: "Abhishek Newase",
    role: roles.TechHead,
    image: AbhishekPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/abhishek-newase/",
      codolio: "https://codolio.com/abhishek_newase",
      // twitter: "https://twitter.com/abhishek_newase",
      // instagram: "https://www.instagram.com/abhishek_newase/",
    },
  },
};

// ***** MEMBERS *****
export const Members24 = [
  {
    name: "Member 1",
    caption: "Caption 1",
    image: AakashPic,
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 2",
    caption: "Caption 2",
    image: AakashPic,
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 3",
    caption: "Caption 3",
    image: AakashPic,
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 4",
    caption: "Caption 4",
    image: AakashPic,
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 5",
    caption: "Caption 5",
    image: AakashPic,
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
];

// ***** COURSES *****
export const courses = [
  {
    title: "Complete DSA Preparation",
    rating: 4.2,
    description: "Master Data Structures & Algorithms with hands-on practice",
    image: "https://placehold.co/240x160"
  },
  {
    title: "System Design Expert",
    rating: 3.7,
    description: "Learn to design scalable systems from industry experts",
    image: "https://placehold.co/240x160"
  },
  {
    title: "Full Stack Development",
    rating: 4.6,
    description: "Become a full stack developer with MERN stack",
    image: "https://placehold.co/240x160"
  }
];

// ***** TESTIMONIALS *****
export const testimonials = [
  {
    quote:
      "Hunter is a great tool for saving time and building pipelines and prospecting. Before we had Hunter in place, I was spending a long time guessing emails and using up valuable time every day. The email verifier is also a game changer for our team.",
    author: "Aakash Kumar Yadav",
    position: "President at GeeksforGeeks Student Chapter SRM RMP",
    image: AakashPic,
    highlightedPhrases: [
      "saving time and building pipelines and prospecting",
      "game changer for our team",
    ],
  },
  {
    quote:
      "The integration capabilities and ease of use make this platform stand out. Our team's productivity has increased significantly since we started using it.",
    author: "Sarah Chen",
    position: "Technical Lead, Innovation Labs",
    image: AakashPic,
    highlightedPhrases: ["integration capabilities", "increased significantly"],
  },
  {
    quote:
      "What impressed me most was the attention to detail and the responsive support team. They've truly created something exceptional here.",
    author: "Marcus Rodriguez",
    position: "Head of Operations, TechFlow",
    image: AakashPic,
    highlightedPhrases: ["attention to detail", "responsive support team"],
  },
];