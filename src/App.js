import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Consulting from "./pages/consulting/Consulting";
import Events from "./pages/events/Events";
import RootBlogLayout from "./Layout/RootBlogLayout";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <RootBlogLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":id",
            element: <BlogDetailPage />,
          },
        ],
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "consulting",
        element: <Consulting />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
