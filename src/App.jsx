import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MineForloeb from "./views/MineForloeb";
import SofiesVerden from "./views/SofiesVerden";
import Hovedpersonen from "./views/Hovedpersonen";
import Hulen from "./views/Hulen";
import Shop from "./views/Shop";
import Point from "./views/Point";
import Quiz from "./views/Quiz";
import Tegn from "./views/Tegn";
import Burgermenu from "./components/Burgermenu";
import LogInd from "./views/LogInd";
import UdforskAlleForloeb from "./views/UdforskAlleForloeb";
import SofiesVerdenKlasse from "./views/SofiesVerdenKlasse";
import Elev from "./views/Elev";
import ProtectedRoute from "./components/ProtectedRoute";
import Filosofi from "./views/Filosofi";

const router = createBrowserRouter([
  {
    path: "/", // Login er åben for alle
    element: <LogInd />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/mineforloeb",
        element: <MineForloeb />,
      },
      {
        path: "/burgermenu",
        element: <Burgermenu />,
      },
      {
        path: "/sofiesverden",
        element: <SofiesVerden />,
      },
      {
        path: "/hovedpersonen",
        element: <Hovedpersonen />,
      },
      {
        path: "/hulen",
        element: <Hulen />,
      },
      {
        path: "/filosofi",
        element: <Filosofi />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/point",
        element: <Point />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/tegn",
        element: <Tegn />,
      },
      {
        path: "/udforskalleforloeb",
        element: <UdforskAlleForloeb />,
      },
      {
        path: "/sofiesverdenklasse",
        element: <SofiesVerdenKlasse />,
      },
      {
        path: "/elev",
        element: <Elev />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
