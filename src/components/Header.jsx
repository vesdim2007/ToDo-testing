import React from "react";
import { Link } from "react-router-dom";
import {
  SHeader,
  SHeaderImg,
  SHeaderButton,
} from "../styled-components/Header.style";

const Header = () => {
  return (
    <SHeader>
      <SHeaderImg src="https://static.pi-top.com/images/logo/black-344x140.png" />

      <Link to="/todos">
        <SHeaderButton>Todo List</SHeaderButton>
      </Link>
    </SHeader>
  );
};

export default Header;
