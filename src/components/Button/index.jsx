/** @format */

import { StyledButton } from "./style";

const Button = ({ type = "primery", ...rest }) => {
  return <StyledButton type={type} {...rest} />;
};

export default Button;
