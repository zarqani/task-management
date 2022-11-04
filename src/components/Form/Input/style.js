/** @format */

import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: #e9eaeb;
  border: 1px solid #e9eaeb;
  outline: none;
  border-bottom-color: #bbb;
  height: 48px;
  padding: 16px 20px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;

  :focus {
    border-bottom-color: #6294c8;
  }
  ${({ error }) => error && "border-bottom-color: red;"}
`;
