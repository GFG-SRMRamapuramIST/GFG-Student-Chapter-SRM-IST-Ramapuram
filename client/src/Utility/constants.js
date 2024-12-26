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
            twitter: "https://twitter.com/aakash_ky",
        },
    },
    [roles.VicePresident]: {
        name: "Sanjana Jaldu",
        role: roles.VicePresident,
        image: SanjanaPic,
        socials: {
            linkedin: "https://www.linkedin.com/in/sanjana-jaldu/",
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