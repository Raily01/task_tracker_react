import React, { useEffect, useState } from "react";
import "reset-css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../molecules/Header/Header";
import Footer from "../molecules/Footer/Footer";
import Button from "../atoms/Button";

const StyledCont = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 50;
`;

const StyledSpace = styled.div`
  flex: 1 0 auto;
`;

const StyledTemp = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin: 10px;
`;

const ButtonWrapperGoBack = styled.div`
  position: fixed;
  top: 60px;
  left: 50px;

  > button {
    color: white;
  }
`;

const DefaultTemplate = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const[showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();
  return (
    <StyledCont>
      <Header />
      <ButtonWrapperGoBack>
        <Button onClick={() => navigate(-1)} label="Go back" />
      </ButtonWrapperGoBack>
      {showScrollButton && (
        <ButtonWrapper>
          <Button onClick={onClick} label="Scroll to top" />
        </ButtonWrapper>
      )}
      <StyledSpace>
        <StyledTemp>{children}</StyledTemp>
      </StyledSpace>
      <Footer />
    </StyledCont>
  );
};

export default DefaultTemplate;
