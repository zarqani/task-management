/** @format */

import styled from "styled-components";

export const StyledTaskContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  width: calc(50% - 20px);
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 540px) {
    width: 100%;
    min-height: 200px;
  }

  h4 {
    margin-top: 0;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    color: #000;
    font-size: 24px;
    display: block;
  }
`;

export const StyledStatus = styled.div`
  background-color: #1675b9;
  border: 1px solid #1675b9;
  color: #fff;
  outline: none;
  height: 44px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  max-width: 100%;
  width: 100px;
  text-align: center;
  text-transform: capitalize;
`;
