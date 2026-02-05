import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import './css/index.css';

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./pages/home";
import About from "./pages/about";
import AdminArea from "./pages/admin";
import Articles from "./pages/articles";
import Article from "./pages/article";

import ResourcesPage from "./routes/resources";
import ResourceDetailsPage from "./routes/resource-details";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { articlesLoader, articleLoader } from "./loaders/loader";

import { resourcesLoader } from "./loaders/resourcesLoader";
import { resourceDetailsLoader } from "./loaders/resourceDetailsLoader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="admin" element={<AdminArea />} />

            <Route
                path="articles"
                element={<Articles />}
                loader={articlesLoader}
            />
            <Route
                path="article/:slug"
                element={<Article />}
                loader={articleLoader}
                errorElement={<ErrorPage />}
            />
            <Route
                path="resources"
                element={<ResourcesPage />}
                loader={resourcesLoader}
            />
            <Route
                path="resources/:resourceId"
                element={<ResourceDetailsPage />}
                loader={resourceDetailsLoader}
            />

            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);