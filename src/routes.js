import React from "react";
import { Route,Routes} from "react-router-dom";
import PageContent from "./components/layout/PageContent";
// import Welcome from "./pages/Welcome";
const AppRoutes = () => {
  <Routes>
    {/* <Route path="/welcom" Component={<Welcome />} /> */}
    <Route exact path="/" element={<PageContent />} />
    <Route path="/docs" element={<PageContent />} />
  </Routes>;
  // </Switch>
};

export default AppRoutes;
