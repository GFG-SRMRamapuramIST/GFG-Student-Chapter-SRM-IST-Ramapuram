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
      // codolio: "https://codolio.com/aakash_ky",
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
      // codolio: "https://codolio.com/sanjana_jaldu",
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
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 2",
    caption: "Caption 2",
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 3",
    caption: "Caption 3",
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 4",
    caption: "Caption 4",
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
  {
    name: "Member 5",
    caption: "Caption 5",
    socials: {
      linkedin: "https://linkedin.com",
      codolio: "https://codolio.com/aakash_ky",
    },
  },
];
