import { useState } from "react";
import { createContext, useEffect } from "react";

const BeerContext = createContext({
  beers: [],
  currentBeers: [],
  favouriteBeers: [],
  searchBeer: () => {},
  addFavouriteBeer: () => {},
  removeFavoriteBeer: () => {},
});

export const BeerContextProvider = (props) => {
  const [initialBeers, setBeers] = useState([]);
  const [currentBeers, setCurrentBeers] = useState([]);
  const [favouriteBeers, setFavouriteBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers").then((res) => {
      res.json().then((data) => {
        setBeers(data.slice(0, 6));
      });
    });
  }, []);

  useEffect(() => {
    setCurrentBeers(initialBeers);
  }, [initialBeers]);

  const searchBeer = (data) => {
    const newList = initialBeers.filter((beer) =>
      beer.name.toLowerCase().includes(data.toLowerCase()),
    );
    setCurrentBeers(newList);
  };

  const addFavouriteBeer = (newBeer) => {
    const haveBeer = favouriteBeers.some((beer) => beer.id === newBeer.id);
    if (!haveBeer) {
      setFavouriteBeers((oldList) => [...oldList, newBeer]);
    }
  };

  const removeFavoriteBeer = (checkedBeerId) => {
    console.log(checkedBeerId);
    const checkedBeer = favouriteBeers.find(
      (beer) => beer.id === checkedBeerId,
    );
    const newList = favouriteBeers.filter((beer) => beer.id !== checkedBeerId);
    setFavouriteBeers(newList);
  };

  const contextValue = {
    beers: initialBeers,
    currentBeers: currentBeers,
    favouriteBeers: favouriteBeers,
    searchBeer: searchBeer,
    addFavouriteBeer: addFavouriteBeer,
    removeFavoriteBeer: removeFavoriteBeer,
  };
  return (
    <BeerContext.Provider value={contextValue}>
      {props.children}
    </BeerContext.Provider>
  );
};

export default BeerContext;
