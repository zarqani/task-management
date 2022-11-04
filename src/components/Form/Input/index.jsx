/** @format */
import { StyledError } from "../../CommonStyled";
import { StyledInput } from "./style";

const Input = ({ register, name, error, ...rest }) => {
  return (
    <>
      <StyledInput error={error} {...rest} {...register(name)} />
      {error?.message && <StyledError>{error.message}</StyledError>}
    </>
  );
};

export default Input;
