// Single point to import all UI Components
import LeadCard from "./LeadCard";
import MemberCard from "./MemberCard";
import YearSelector from "./YearSelector";

export {
  LeadCard,
  MemberCard,
  YearSelector,
};

// **** STYLED UI COMPONENTS ****
import styled from "styled-components";
import { gridBackdrop } from "../../assets";

const GridBackdropDiv = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to left, rgba(252, 252, 253, 0) 0%, #fcfcfd 90%),
      url(${gridBackdrop}) top right repeat-y;
    opacity: 0.5;  
    z-index: -1;
  }  
`;  

const GridBackdropDiv2 = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.9;
    z-index: -1;
    background: linear-gradient(to left, rgba(252, 252, 253, 0) 0%, #e5e7eb 90%),
      url(${gridBackdrop}) top right repeat;
  }    
`;  

export { GridBackdropDiv, GridBackdropDiv2 };
// **************************************