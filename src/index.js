import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Authors from "./pages/Authors";
import EditPost from "./pages/EditPost";
import CategoryPosts from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import DeletePost from "./pages/DeletePost";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "posts/:id",
                element: <PostDetail />,
            },
            {
                path: "profile/:id",
                element: <UserProfile />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "posts/categories/:category",
                element: <CategoryPosts />,
            },
            {
                path: "posts/users/:id",
                element: <AuthorPosts />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "authors",
                element: <Authors />,
            },
            {
                path: "create",
                element: <CreatePost />,
            },
            {
                path: "myposts/:id",
                element: <Dashboard />,
            },
            {
                path: "posts/:id/edit",
                element: <EditPost />,
            },
            {
                path: "Logout",
                element: <Logout />,
            },
            {
                path: "posts/:id/delete",
                element: <DeletePost />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
