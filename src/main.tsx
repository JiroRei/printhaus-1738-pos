import { StrictMode } from 'react'
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
]);

createRoot(document.getElementById('root')!).render(

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />,
    </ThemeProvider>

)
