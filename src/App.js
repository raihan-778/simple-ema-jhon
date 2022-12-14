import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Main from "./Layouts/Main/Main";
import ProductsAndCartLoader from "./Loaders/ProductsAndCartLoader";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch(`http://localhost:5000/products`),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/shipping",
          loader: ProductsAndCartLoader,
          element: (
            <PrivateRoute>
              <Shipping></Shipping>,
            </PrivateRoute>
          ),
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          ),
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
