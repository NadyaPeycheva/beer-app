import { Fragment } from "react";
import AllBeers from "../components/beers/AllBeers";
import Search from "../components/Search";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <AllBeers />
    </Fragment>
  );
};
export default Home;
