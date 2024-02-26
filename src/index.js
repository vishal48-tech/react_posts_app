import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home";
import About from "./About";
import PostPage from "./PostPage";
import EditPage from "./EditPage";
import NewPost from "./NewPost";
import Missing from "./Missing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Missing />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPage />,
      },
      {
        path: "/new-post",
        element: <NewPost />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
);
