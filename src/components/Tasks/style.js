/** @format */

import styled from "styled-components";

export const StyledTasksContainer = styled.div`
  background-color: #1675b9;
  border-radius: 40px 40px 0 0;
  padding: 32px 0 0;
  h3 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

export const StyledTasks = styled.div`
  background-color: #a2ceed;
  border-radius: 40px 40px 0 0;
  padding: 40px 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const EmptyStyled = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
