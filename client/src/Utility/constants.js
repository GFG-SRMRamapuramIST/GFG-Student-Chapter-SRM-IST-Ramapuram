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
    rating: 4.7,
    description: "Master Data Structures & Algorithms with hands-on practice",
    image: "https://placehold.co/240x160",
  },
  {
    title: "ML / Data Science",
    rating: 4.7,
    description: "Learn to design scalable models and analyze data",
    image: "https://placehold.co/240x160",
  },
  {
    title: "Full Stack Development",
    rating: 4.7,
    description: "Become a full stack developer with MERN stack",
    image: "https://placehold.co/240x160",
  },
];

// ***** TESTIMONIALS *****
export const testimonials = [
  {
    quote:
      "As President of the GeeksforGeeks Student Chapter, I gained leadership skills and further cultivated my passion for competitive programming. Organizing contests and mentoring peers enhanced my problem-solving abilities while fostering a collaborative community of coders. This experience sharpened both my technical expertise and strategic thinking of mine.",
    author: "Aakash Kumar Yadav",
    position: "President 2024-25",
    image: AakashPic,
    highlightedPhrases: [
      "gained leadership skills",
      "enhanced my problem-solving abilities",
    ],
  },
  {
    quote:
      "Being the Vice President of GeeksforGeeks Student Chapter has polished my leadership, team management and organizational skills. Regular opportunities to network, mentor others and develop my knowledge of coding and development.",
    author: "Sanjana Jaldu",
    position: "Vice-President 2024-25",
    image: SanjanaPic,
    highlightedPhrases: [
      "leadership, team management and organizational skills",
      "opportunities to network, mentor others",
    ],
  },
];