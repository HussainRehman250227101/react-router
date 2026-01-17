import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home, { postLoader } from "./pages/Home";
import About from "./pages/About";
import AddPost from "./pages/AddPost";
import Post, { singlepostLoader } from "./components/Post";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={postLoader}/>
        <Route path="about" element={<About />} />
        <Route path="addPost" element={<AddPost />} />
        <Route path=":id" element={<Post />} loader={singlepostLoader}/>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
