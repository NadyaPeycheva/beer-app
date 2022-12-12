import "./App.css";

import { Fragment, useState } from "react";
import { Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favourites";
import Navigation from "./components/Navigation";
import RandomBeer from "./components/beers/RandomBeer";
import Modal from "./components/modal/Modal";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const conectedToMetamask = () => {
    console.log(window.ethereum);
    if (window.ethereum) {
      setIsLogged((state) => !state);
    }
  };
  return (
    <Fragment>
      {!isLogged && <Modal onClick={conectedToMetamask} />}
      <header>
        <Navigation />
      </header>
      <main>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/favourites">
          <Favorites />
        </Route>
        <Route path="/randomBeer">
          <RandomBeer />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
