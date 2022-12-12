import { useEffect, useState } from "react";
import Beer from "./Beer";

import classes from "./Random.module.css";

const RandomBeer = () => {
  const [beer, setBeer] = useState("");
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random").then((res) => {
      res.json().then((data) => {
        setBeer({
          id: data[0].id,
          name: data[0].name,
          description: data[0].description,
          image_url: data[0]["image_url"],
        });
      });
    });
  }, []);

  return (
    <div className={classes.randomContainer}>
      {beer && <Beer beer={beer} />}
      {!beer && <p className={classes.randomLoading}>Loading...</p>}
    </div>
  );
};
export default RandomBeer;
