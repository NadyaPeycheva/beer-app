import classes from "./Search.module.css";
import { useRef, useContext } from "react";
import BeerContext from "../store/beer-context";

const Search = () => {
  let inputName = useRef();

  const { searchBeer } = useContext(BeerContext);

  const onChangeHandler = () => {
    const currentSearch = inputName.current.value;
    searchBeer(currentSearch);
  };

  // const buttonHandler = () => {
  //   const currentSearch = inputName.current.value;
  //   searchBeer(currentSearch);
  //   inputName.current.value = "";
  // };

  return (
    <div className={classes["search-container"]}>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Search for beer..."
        ref={inputName}
      ></input>
      <button
        // onClick={buttonHandler}
        className={classes["search-button"]}
      >
        {" "}
        Search
      </button>
    </div>
  );
};
export default Search;
