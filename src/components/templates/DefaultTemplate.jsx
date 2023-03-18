import React from "react";
import "reset-css";
import styled from "styled-components";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Button from "../atoms/Button";
import MainContent from "../molecules/MainContent";

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
    <>
      <Header />
      <StyledTemp>{children}</StyledTemp>
      <MainContent />
      <Button label="its a button" onClick={test} disabled={false} color="aquamarine" />
      <Footer />
    </>
  );
};

export default DefaultTemplate;
