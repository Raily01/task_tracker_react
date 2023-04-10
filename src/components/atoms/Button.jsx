import React from "react";
import "reset-css";
import styled, { css } from "styled-components";

const StyledButt = styled.button(
  ({ color, onClick }) => css`
    onClick=${onClick}
    text-align: center;
    font-size: 20px;
    background-color: ${color};
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    display: block;
    position: relative;
    width: 100px;
  `,
);

const Button = ({ label, color = "aquamarine", onClick }) => {
  return (
    <StyledButt color={color} onClick={onClick}>
      {label}
    </StyledButt>
  );
};

export default Button;
