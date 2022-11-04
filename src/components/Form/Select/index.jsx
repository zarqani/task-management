/** @format */

import { StyledError } from "../../CommonStyled";
import { StyledSelect } from "./style";

const Select = ({ register, name, options, error, ...rest }) => {
  return (
    <>
      <StyledSelect error={error} {...rest} {...register(name)}>
        {options?.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </StyledSelect>
      {error?.message && <StyledError>{error.message}</StyledError>}
    </>
  );
};

export default Select;
