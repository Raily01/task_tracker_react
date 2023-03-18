import styled from "styled-components";
import "reset-css";

// import { baseTheme } from 'styles/theme'

const StyledInfo = styled.h3`
  top: 0;
  right: 100px;
  width: 100%;
  height: 50px;
  background: #c8a2c8;
  color: #fcb400;
  text-align: center;
  margin-top: 5px;
  padding-top: 10px;
  font-size: 40px;
  position: static;
`;

const MainContent = () => {
  return (
    <>
      <StyledInfo>
        {" "}
        <h3>1. i am a girl</h3>
      </StyledInfo>
      <StyledInfo>
        {" "}
        <h3>2. i like to walk in the rain</h3>
      </StyledInfo>
      <StyledInfo>
        {" "}
        <h3>3. i sneeze twice from chocolate</h3>
      </StyledInfo>
    </>
  );
};
export default MainContent;
