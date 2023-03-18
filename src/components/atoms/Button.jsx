import React from "react";
import "reset-css";
import styled, { css } from "styled-components";

const StyledButt = styled.button(
  ({ color }) => css`
    label: {label};
    text-align: center;
    font-size: 20px;
    background-color: ${color};
    text-align: center;
    disabled: {disabled};
    onClick: {onClick};
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    display: block;
    position: relative;
    width: 100px;
    `,
);

const Button = ({ label, onClick = () => {}, disabled, color = "aquamarine" }) => {
  return (
    <StyledButt color={color} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButt>
  );
};

export default Button;
