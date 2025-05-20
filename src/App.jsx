import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MineForloeb from "./views/MineForloeb";
import SofiesVerden from "./views/SofiesVerden";

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
        path: "/sofiesverden",
        element: <SofiesVerden />,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
