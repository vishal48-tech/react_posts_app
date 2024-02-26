import React from "react";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <header>
      <h1>{title}</h1>
      {width < 768 ? (
        <h3>Mobile</h3>
      ) : width < 992 ? (
        <h3>Tablet</h3>
      ) : (
        <h3>Laptop</h3>
      )}
    </header>
  );
};

export default Header;
