import { AakashPic, AbhishekPic, RachitPic, SanjanaPic } from "../assets";

export const roles = {
  President: "President",
  VicePresident: "Vice President",
  OpsHead: "Operational Head",
  TechHead: "Technical Head",
};

export const CoreTeam24 = {
  [roles.President]: {
    name: "Aakash Kumar Yadav",
    role: roles.President,
    image: AakashPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/aakash-kumar-yadav/",
      codolio: "https://codolio.com/aakash_ky",
      twitter: "https://twitter.com/aakash_ky",
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
    },
  },
  [roles.TechHead]: {
    name: "Abhishek Newase",
    role: roles.TechHead,
    image: AbhishekPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/abhishek-newase/",
    },
  },
};

export const members = [
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

export const courses = [
  {
    title: "Complete DSA Preparation",
    rating: 4,
    description: "Master Data Structures & Algorithms with hands-on practice",
    image: "https://placehold.co/240x160"
  },
  {
    title: "System Design Expert",
    rating: 3.5,
    description: "Learn to design scalable systems from industry experts",
    image: "https://placehold.co/240x160"
  },
  {
    title: "Full Stack Development",
    rating: 4.5,
    description: "Become a full stack developer with MERN stack",
    image: "https://placehold.co/240x160"
  }
];