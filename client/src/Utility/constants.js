import {
  AakashPic,
  AbhishekPic,
  DevaprabhaPic,
  DSA,
  FSD,
  JustinPic,
  MLDS,
  RachitPic,
  RevanPic,
  SanjanaPic,
  Shreya_Rahul_JainPic,
  Yamini_ShankariPic,
} from "../assets";

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
    name: "Justin Juby",
    caption: "CSE - AIML, 1st Year",
    image: JustinPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/justinjuby/",
      codolio: "https://codolio.com/profile/JustinJuby",
    },
  },
  {
    name: "Yamini Shankari AJ",
    caption: "CSE- Core, 2nd Year",
    image: Yamini_ShankariPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/yamini-shankari-aj-8135842a4/",
      codolio: "https://codolio.com/profile/Yams08y",
    },
  },
  {
    name: "Shreya Rahul Jain  ",
    caption: "CSE- Core, 2nd Year",
    image: Shreya_Rahul_JainPic,
    socials: {
      linkedin:
        "https://www.linkedin.com/in/shreyarahuljain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      codolio: "https://codolio.com/profile/Shreya%20Rahul%20Jain",
    },
  },
  {
    name: "VR REVAN",
    caption: "CSE - IOT, 1st Year",
    image: RevanPic,
    socials: {
      linkedin:
        "https://www.linkedin.com/in/revan-vr-427640310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      codolio: "https://codolio.com/profile/REVAN",
    },
  },
  {
    name: "Devaprabha Anup",
    caption: "CSE - IOT, 1st Year",
    image: DevaprabhaPic,
    socials: {
      linkedin: "https://www.linkedin.com/in/devaprabha-anup-b94183330",
      codolio: "https://codolio.com/profile/Deva06",
    },
  },
];

// ***** COURSES *****
export const courses = [
  {
    title: "Complete DSA Preparation",
    rating: 4.7,
    description: "Master Data Structures & Algorithms with hands-on practice",
    image: DSA,
  },
  {
    title: "ML / Data Science",
    rating: 4.7,
    description: "Learn to design scalable models and analyze data",
    image: MLDS,
  },
  {
    title: "Full Stack Development",
    rating: 4.7,
    description: "Become a full stack developer with MERN stack",
    image: FSD,
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
