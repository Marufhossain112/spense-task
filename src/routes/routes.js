import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
