import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "dashboard",
    Component: Dashboard  ,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
