import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import Header from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import AnimesPage from "./containers/AnimesPage";
import AnimeDetails from "./containers/AnimeDetails";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import { history } from "./helper/history";
import StudioPage from "./containers/StudioPage";
import StudioDetails from "./containers/StudioDetails";
import GenrePage from "./containers/GenrePage";
import GenreDetails from "./containers/GenreDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={AnimesPage} />
          <Route path="/anime/:id" component={AnimeDetails} />
          <Route path="/studio" exact component={StudioPage} />
          <Route path="/studio/:id" component={StudioDetails} />
          <Route path="/genre" exact component={GenrePage} />
          <Route path="/genre/:id" component={GenreDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
