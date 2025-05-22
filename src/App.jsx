import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MineForloeb from "./views/MineForloeb";
import SofiesVerden from "./views/SofiesVerden";
import AlleForloeb from "./views/AlleForloeb";
import KapitelEt from "./views/KapitelEt";
import Indstillinger from "./views/Indstillinger";
import Shop from "./views/Shop";
import Point from "./views/Point";
import Quiz from "./views/Quiz";
import SaadanBrugerDuAppen from "./views/SaadanBrugerDuAppen";
import Tegn from "./views/Tegn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MineForloeb />,
      },
      {
        path: "/alleForloeb",
        element: <AlleForloeb />,
      },
      {
        path: "/sofiesverden",
        element: <SofiesVerden />,
      },
      {
        path: "/kapitel",
        element: <KapitelEt />,
      },
      {
        path: "/indstillinger",
        element: <Indstillinger />,
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "point",
        element: <Point />
      },
      {
        path: "/quiz",
        element: <Quiz />
      },
      {
        path: "/saadanBrugerDuAppen",
        element: <SaadanBrugerDuAppen/>
      },
      {
        path: "/tegn",
        element: <Tegn/>
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
