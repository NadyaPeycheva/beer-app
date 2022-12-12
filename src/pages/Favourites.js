import { useContext } from "react";
import Beer from "../components/beers/Beer";
import BeerContext from "../store/beer-context";

import classes from "./Favourite.module.css";

const Favorites = () => {
  const { favouriteBeers } = useContext(BeerContext);
  return (
    <div className={classes.favouriteContainer}>
      {favouriteBeers &&
        favouriteBeers.map((beer) => <Beer key={beer.id} beer={beer} />)}
      {favouriteBeers.length === 0 && <p>No added beers!</p>}
    </div>
  );
};
export default Favorites;
