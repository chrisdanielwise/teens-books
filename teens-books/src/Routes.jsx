import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "pages/Layout";
import NotFound from "../src/pages/NotFound";
import { SearchProvider } from "../src/context/searchContext";
const ListPage = React.lazy(() => import("../src/pages/ListPage/index"));
const HomePage = React.lazy(() => import("../src/pages/HomePage/index"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <SearchProvider>
      <Router>
        <Routes>
          {/* <Route path="/dhiwise-dashboard" element={<Layout />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/list_page" element={<ListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </SearchProvider>
    </React.Suspense>
  );
};
export default ProjectRoutes;