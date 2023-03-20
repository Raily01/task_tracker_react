import styled from "styled-components";
import "reset-css";

// import { baseTheme } from 'styles/theme'

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background: grey;
`;

const Footer = () => <StyledFooter>© 2023 Shaykhulova Railya</StyledFooter>;

export default Footer;
