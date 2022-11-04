/** @format */

import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  background-color: #e9eaeb;
  border: 1px solid #e9eaeb;
  outline: none;
  border-bottom-color: #bbb;
  width: 100%;
  height: 48px;
  padding: 16px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  min-height: 180px;

  :focus {
    border-bottom-color: #6294c8;
  }
  ${({ error }) => error && "border-bottom-color: red;"}
`;
