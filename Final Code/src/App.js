import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

import { Provider } from "react-redux";
import Error from "./components/Error";
import Offline from "./components/Offline";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import RestaurantMenu from "./pages/Home/RestaurantMenu";
import Login from "./pages/Login/Login";
import appStore from "./utils/appStore";
import { AuthProvider } from "./utils/auth";
import useStatus from "./utils/useStatus";
import Cart from "./pages/Cart/Cart";

const AppLayout = () => {
  const onlineStatus = useStatus();
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        {onlineStatus ? <Outlet /> : <Offline />}
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </React.StrictMode>
);
