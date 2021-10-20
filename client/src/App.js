import { Redirect } from "react-router";
import HomeLayoutHOC from "./HOC/Home.HOC";

import Master from "./Components/master";

function App() {
  return (
    <>
      <Redirect from="/" to="/delivery" />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;
