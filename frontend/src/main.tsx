import ReactDOM from 'react-dom/client'
import * as React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./stylesheets/main.css"
import Home from './views/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
