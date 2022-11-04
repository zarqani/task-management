/** @format */

import { StyledError } from "../../CommonStyled";
import { StyledTextarea } from "./style";

const Textarea = ({ register, name, error, ...rest }) => {
  return (
    <>
      <StyledTextarea error={error} {...rest} {...register(name)} />
      {error?.message && <StyledError>{error.message}</StyledError>}
    </>
  );
};

export default Textarea;
