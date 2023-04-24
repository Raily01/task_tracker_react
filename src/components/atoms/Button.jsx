import React from "react";
import "reset-css";
import styled, { css } from "styled-components";

const StyledButt = styled.button(
  ({ color }) => css`
    text-align: center;
    font-size: 15px;
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

const Button = ({ label, color = "purple", onClick }) => {
  return (
    <StyledButt color={color} onClick={onClick}>
      {label}
    </StyledButt>
  );
};

export default Button;
