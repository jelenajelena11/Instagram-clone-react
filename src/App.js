import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import { GridLoader } from "react-spinners";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Router>
      <Suspense fallback={<GridLoader />}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
