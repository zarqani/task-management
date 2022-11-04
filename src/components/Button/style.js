/** @format */

import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ type }) => (type === "default" ? "#fff" : "#1675b9")};
  border: 1px solid
    ${({ type }) => (type === "default" ? "#dadada" : "#1675b9")};
  color: ${({ type }) => (type === "default" ? "#807f7f" : "#fff")};
  outline: none;
  height: 48px;
  padding: 16px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  max-width: 100%;
  transition: all 0.4s;
  cursor: pointer;
  ${({ block, half }) =>
    half ? "width: calc(50% - 10px);" : block ? "width: 100%;" : ""}

  + button {
    margin-left: 20px;
  }

  i {
    margin-right: 8px;
  }

  :hover {
    opacity: 0.9;
  }
`;
