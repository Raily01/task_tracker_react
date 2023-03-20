import React from "react";
import "reset-css";
import styled from "styled-components";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Button from "../atoms/Button";
import MainContent from "../molecules/MainContent";

const StyledCont = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledSpace = styled.div`
  flex: 1 0 auto;
  background-color: pink;
`;

const StyledTemp = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin: 10px;
`;
const DefaultTemplate = ({ children }) => {
  const test = () => {
    console.log("pupupu");
  };
  return (
    <StyledCont>
      <Header />
      <StyledSpace>
        <StyledTemp>{children}</StyledTemp>
        <MainContent />
        <Button label="its a button" onClick={test} disabled={false} color="aquamarine" />
      </StyledSpace>
      <Footer />
    </StyledCont>
  );
};

export default DefaultTemplate;
