const defaulfHash = "L00000fQfQfQfQfQfQfQfQfQfQfQ";

// *************** Core Team Profile Pics ************************
import AakashPfp from "./imgs/people/AakashPfp.png";
import SanjanaPfp from "./imgs/people/SanjanaPfp.png";
import RachitPfp from "./imgs/people/RachitPfp.png";
import AbhishekPfp from "./imgs/people/AbhishekPfp.png";

const AakashPic = {
  url: AakashPfp,
  hashCode: "LcG+aZtR.8Vs~qkCtlRPR*s:i^WC",
  alt: "Aakash Kumar",
};

const SanjanaPic = {
  url: SanjanaPfp,
  hashCode: defaulfHash, //TODO: Change this hash
  alt: "Sanjana Jaldu",
};

const RachitPic = {
  url: RachitPfp,
  hashCode: defaulfHash, //TODO: Change this hash
  alt: "Rachit Dhaka",
};

const AbhishekPic = {
  url: AbhishekPfp,
  hashCode: defaulfHash, //TODO: Change this hash
  alt: "Abhishek Newase",
};

export { AakashPic, SanjanaPic, RachitPic, AbhishekPic };
// *****************************************************************************

// ************************** Alumani's Company Logo ***************************
import Fidelity from "./imgs/companies/fidelity.svg";
import JPMG from "./imgs/companies/jpm.svg";
import Razorpay from "./imgs/companies/Razorpay.svg";
import Siemens from "./imgs/companies/smn.svg";

export const AlumaniCompanyLogo = [
  {
    url: Fidelity,
    hashCode: "LYR{=Aj[s;j[j[ayj[ay~Xj[R%j[",
    alt: "Fidelity Logo",
  },
  {
    url: JPMG,
    hashCode: "LPQ,E,xuofofIUM{j[xu_NM_ayay",
    alt: "JPMG Logo",
  },
  {
    url: Razorpay,
    hashCode: "LkPGpsNLR.WY-;RkWCof~poeaef6",
    alt: "Razorpay Logo",
  },
  {
    url: Siemens,
    hashCode: "L1Kf8B%Me.tRl9NG~C56?H56009t",
    alt: "Siemens Logo",
  },
];
// *****************************************************************************

// ********* Other Designs and Imgs **********
import gridBackdrop from './grid-backdrop.svg';
import abtGfg from './imgs/abtgfg.png';

export { gridBackdrop, abtGfg };
