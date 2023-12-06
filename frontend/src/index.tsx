import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./services/context/userContext";
import RentProvider from "./services/context/rentContext";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import ElectricBike from "./Pages/ElectricBike/ElectricBike";
import VTT from "./Pages/VTT/VTT";
import ProBike from "./Pages/ProBike/ProBike";
import VintageBike from "./Pages/VintageBike/VintageBike";
import Accessories from "./Pages/Accessories/Accessories";
import MoreInfoAboutProduct from "./Pages/MoreInfoAboutProduct/MoreInfoAboutProduct";
import Admin from "./Pages/Admin/Admin";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Rgpd from "./Pages/Rgpd/Rgpd";
import CartStepTwo from "./Pages/CartStepTwo/CartStepTwo";
import CartStepThree from "./Pages/CartStepThree/CartStepThree";
import "./index.scss";
import OrderProvider from "./services/context/orderContext";
import UserModify from "./Components/UserModify/UserModify";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/cartStepTwo", element: <CartStepTwo /> },
      { path: "/cartStepThree", element: <CartStepThree /> },
      { path: "/veloElec", element: <ElectricBike /> },
      { path: "/vtt", element: <VTT /> },
      { path: "/proBike", element: <ProBike /> },
      { path: "/vintageBike", element: <VintageBike /> },
      { path: "/accessories", element: <Accessories /> },
      { path: "/moreinfoaboutbike/:id", element: <MoreInfoAboutProduct /> },
      { path: "/admin", element: <Admin /> },
      { path: "/rgpd", element: <Rgpd /> },
      { path: "/contact", element: <Contact /> },
      { path: "/admin/users/:id", element: <UserModify /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <RentProvider>
          <OrderProvider>
            <RouterProvider router={router} />
          </OrderProvider>
        </RentProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
