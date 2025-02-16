import { createBrowserRouter } from "react-router-dom";
import MainContent from "@/features/news/pages/MainContent";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import Layout from "./layout/Layout";
import UrlNotFound from "./components/common/UrlNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainContent /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <UrlNotFound /> },
    ],
  },
]);

export default router;
