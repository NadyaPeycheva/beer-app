import { useContext } from "react";
import Beer from "./Beer";

import classes from "./AllBeers.module.css";
import BeerContext from "../../store/beer-context";

const AllBeers = () => {
  const { currentBeers: beers } = useContext(BeerContext);

  return (
    <div className={classes.allBeersContainer}>
      {!beers && <p>Loading...</p>}
      {beers && beers.map((beer) => <Beer key={beer.id} beer={beer} />)}
    </div>
  );
};
export default AllBeers;
