import styled from "styled-components";
import "reset-css";
import { Link } from "react-router-dom";

// import { baseTheme } from 'styles/theme'

const StyledHeader = styled.header`
  top: 0;
  right: 100px;
  width: 100%;
  height: 60px;
  background: purple;
  position: sticky;
  color: white;
  padding-top: 10px;
  font-size: 40px;
  z-index: 1000;
`;
const StyledLink = styled(Link)`
  color: grey;
  text-align: right;
  padding: 10px;
`;
const StyledName = styled(Link)`
  color: black;
  text-align: left;
  padding: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledName to="/"> TASK TRACKER </StyledName>
      <StyledLink to="/table"> Table </StyledLink>
    </StyledHeader>
  );
};

export default Header;
