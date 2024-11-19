import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Content from "./Components/Content";
import Header from "./Components/Header";
import App from "./Components/App";

const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/content",
        element: <Content />,
      },
      {
        path: "/header",
        element: <Header />,
      },
    ],
  },
]);
export default projectroute;