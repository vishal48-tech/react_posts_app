import React from "react";
import { NavLink } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const Navbar = () => {
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);

  return (
    <nav>
      <form>
        <input
          type="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="Search posts"
        />
      </form>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/new-post">Post</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
