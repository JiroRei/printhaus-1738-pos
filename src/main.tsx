import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx';
import { ThemeProvider } from './pages/page-comps/theme-provider.tsx';
import PrintJobs from './pages/printjobs.tsx';
<<<<<<< HEAD
import Inventory from './pages/inventory.tsx';
=======
import InventoryManagement from './pages/inventory-page.tsx';
import TransactionPage from './pages/transaction-page.tsx';
>>>>>>> 400107866f53b11a962ce9fd74de24364871afe3

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
<<<<<<< HEAD
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
    Component: Inventory,
  },
  {
    path: "invmgt",
    Component: null,
=======
   {
    path: "/InventoryManagement",
    Component: InventoryManagement,
  },
  {
    path: "/TransactionPage",
    Component: TransactionPage,
>>>>>>> 400107866f53b11a962ce9fd74de24364871afe3
  },
]);

createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    </ThemeProvider>
</React.StrictMode>
)
