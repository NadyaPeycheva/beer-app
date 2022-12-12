import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes["nav-container"]}>
      <h1 className={classes["nav-title"]}>Beans Love Beers</h1>
      <nav className={classes.nav}>
        <NavLink to="/home" className={classes.navItem}>
          Home
        </NavLink>
        <NavLink to="/favourites" className={classes.navItem}>
          Favourites
        </NavLink>
        <NavLink to="/randomBeer" className={classes.navItem}>
          Random Beer
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
