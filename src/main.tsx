import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx';
import { ThemeProvider } from './pages/page-comps/theme-provider.tsx';
import PrintJobs from './pages/printjobs.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "dashboard",
    Component: Dashboard,
  },
  {
    path: "printjob",
    Component: PrintJobs,
  },
  {
    path: "transactions",
    Component: null,
  },
  {
    path: "salesreport",
    Component: null,
  },
  {
    path: "inventory",
    Component: null,
  },
  {
    path: "invmgt",
    Component: null,
  },
]);

createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />,
    </ThemeProvider>
</React.StrictMode>
)
