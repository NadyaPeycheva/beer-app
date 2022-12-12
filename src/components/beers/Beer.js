import { useContext, useState } from "react";
import BeerContext from "../../store/beer-context";
import classes from "./Beer.module.css";
import useSound from "use-sound";
import ping from "../../opening-beer-can-6336.mp3";

const Beer = ({ beer }) => {
  const { addFavouriteBeer, removeFavoriteBeer, favouriteBeers } =
    useContext(BeerContext);
  const isBeerChecked = favouriteBeers.some(
    (beerFromList) => beerFromList.id === beer.id,
  );
  const [isClicked, setIsClicked] = useState(isBeerChecked);

  const onClickHandler = () => {
    setIsClicked((state) => !state);
    if (!isClicked) {
      addFavouriteBeer({
        id: beer.id,
        name: beer.name,
        description: beer.description,
        image_url: beer["image_url"],
      });
    } else {
      removeFavoriteBeer(beer.id);
    }
  };

  const [play, { stop }] = useSound(ping);
  const playSound = () => {
    console.log("work");
    play();
  };
  return (
    <div onClick={onClickHandler} className={classes.beerContainer}>
      <div className={classes.imageContainer} onClick={playSound}>
        <img
          className={classes.beerImage}
          src={beer["image_url"]}
          alt={beer.name}
        />
      </div>

      <div className={classes.beerContent}>
        <h2>{beer.name}</h2>
        <p>{beer.description}</p>
      </div>
      {isClicked && <i style={{ color: "#00D1B2" }} class="far fa-star"></i>}
    </div>
  );
};
export default Beer;
