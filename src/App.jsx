import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MineForloeb from "./views/MineForloeb";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MineForloeb />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
