import { createHashRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { ROUTES } from "./routes";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ContactsPage from "../pages/ContactsPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.services,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.contacts,
        element: <ContactsPage />,
      },
    ],
  },
]);
