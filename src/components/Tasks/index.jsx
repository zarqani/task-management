/** @format */

import { useTask } from "../../context";
import { StyledContainer } from "../CommonStyled";
import {
  StyledTasksContainer,
  StyledTasks,
  StyledDiv,
  EmptyStyled,
} from "./style";
import Task from "./Task";

const Tasks = () => {
  const {
    state: { tasks },
  } = useTask();
  return (
    <StyledTasksContainer>
      <StyledContainer>
        <h3>Tasks</h3>
      </StyledContainer>
      <StyledTasks>
        <StyledContainer>
          {tasks?.length > 0 ? (
            <StyledDiv>
              {tasks.map((task) => (
                <Task task={task} />
              ))}
            </StyledDiv>
          ) : (
            <EmptyStyled>
              You have noting to do.
              <br />
              Go get some sleep.
            </EmptyStyled>
          )}
        </StyledContainer>
      </StyledTasks>
    </StyledTasksContainer>
  );
};

export default Tasks;
