import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";

const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="container d-flex align-items-center m-5">
            <strong>Loading...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/mens" component={MenScreen} />
          <Route exact path="/womens" component={WomenScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />

          <Redirect to="/womens" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
