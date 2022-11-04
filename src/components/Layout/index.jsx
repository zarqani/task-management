/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import { StyledContainer } from "../CommonStyled/index";
import { StyledHeader } from "./style";

const Layout = ({ children }) => {
  const location = useLocation();
  const currentLocation = location.pathname?.split("/")?.[1];
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          Task Management <i className="icon-chevron-right" />{" "}
          {currentLocation || "Home"}
        </StyledContainer>
      </StyledHeader>
      <main>{children}</main>
    </>
  );
};

export default Layout;
