import React from "react";
import Modal from "react-modal";
import styled, { withTheme } from "styled-components";

export const modalStyles = {
  content: {
    maxWidth: "600px",
    minWidth: "500px",
    maxHeight: "80%",
    borderRadius: "5px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #E2EAF1",
    backgroundColor: "#FFFFFF",
    padding: "25px 45px 25px 35px",
  },
  overlay: {
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

export const CloseButton = styled.span`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  color: #d6d9dc;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  margin: 5px;
  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    content: "✕";
  }
`;

export const DontDestroyButton = styled.button`
  color: white;
  background-color: green;
  padding: 8px;
  margin-top: 30px;
  font-size: 20px;
  border-radius: 12px;
`;

export const DestroyButton = styled.button`
  color: white;
  background-color: red;
  padding: 8px;
  margin-left: 30px;
  font-size: 20px;
  border-radius: 12px;
`;

export const StyledTitle = styled.h1`
  font-size: 25px;
  color: black;
`;

const ModalWindow = ({ isOpen = false, setIsOpen = () => {} }) => {
  return (
    <Modal
      style={{
        content: { ...modalStyles.content },
        overlay: { ...modalStyles.overlay },
      }}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsOpen(false)}
    >
      <CloseButton onClick={() => setIsOpen(false)} />
      <StyledTitle>Do you really want to destroy project?</StyledTitle>
      <DontDestroyButton onClick={() => setIsOpen(false)}>No, I dont like it pls stop</DontDestroyButton>
      <DestroyButton>DESTROY I SAID!!!</DestroyButton>
      {/* <button type="reset">i do nothing too</button> */}
    </Modal>
  );
};

Modal.setAppElement("body");

export default withTheme(ModalWindow);
