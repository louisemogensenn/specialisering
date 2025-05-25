import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MineForloeb from "./views/MineForloeb";
import SofiesVerden from "./views/SofiesVerden";
import Hovedpersonen from "./views/Hovedpersonen";
import Hulen from "./views/Hulen";
import Indstillinger from "./views/Indstillinger";
import Shop from "./views/Shop";
import Point from "./views/Point";
import Quiz from "./views/Quiz";
import SaadanBrugerDuAppen from "./views/SaadanBrugerDuAppen";
import Tegn from "./views/Tegn";
import Burgermenu from "./components/Burgermenu";
import LogInd from "./views/LogInd";
import UdforskAlleForloeb from "./views/UdforskAlleForloeb";
import SofiesVerdenKlasse from "./views/SofiesVerdenKlasse";
import Elev from "./views/Elev";

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
        element: <Hulen />
      },
      {
        path: "/indstillinger",
        element: <Indstillinger />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "point",
        element: <Point />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/saadanBrugerDuAppen",
        element: <SaadanBrugerDuAppen />,
      },
      {
        path: "/tegn",
        element: <Tegn />,
      },
      {
        path: "/logind",
        element: <LogInd />,
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
        element: <Elev/>
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
