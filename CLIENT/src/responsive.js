import { css } from "styled-components";

export const mobile = (props) => {
    return css`
     @media only screen 
    and (max-width: 1280px) 
    and (max-height: 844px) {
     ${props}
  }

     `;
};