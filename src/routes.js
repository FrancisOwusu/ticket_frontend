import React from "react";
import { Route, Switch } from "react-router-dom";
import PageContent from "./components/layout/PageContent";
const Routes = () => {
  {
    /* <Switch> */
  }
  <Routes>
    <Route path="/" element={<PageContent />} />
    <Route path="/docs" element={<PageContent />} />
  </Routes>;
  // </Switch>
};

export default Routes;
