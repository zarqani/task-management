/** @format */
import { StyledTaskContainer, StyledDiv, StyledStatus } from "./style";
import { Link } from "react-router-dom";

const Task = ({ task: { title, description, status, id } }) => {
  return (
    <StyledTaskContainer>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <StyledDiv>
        <StyledStatus>{status}</StyledStatus>
        <Link to={`/edit/${id}`}>
          <i className="icon-edit" />
        </Link>
      </StyledDiv>
    </StyledTaskContainer>
  );
};

export default Task;
