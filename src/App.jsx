import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home, { postLoader } from "./pages/Home";
import About from "./pages/About";
import AddPost, { allpostloader } from "./pages/AddPost";
import Post, { singlepostLoader } from "./components/Post";
import Error from "./components/Error";
import EditPost from "./components/EditPost";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={postLoader}/>
        <Route path="about" element={<About />} />
        <Route path="addPost" element={<AddPost />} loader={allpostloader}/>
        <Route path="posts/:id" element={<Post />} loader={singlepostLoader}/>
        <Route path="posts/:id/edit" element={<EditPost />} loader={singlepostLoader}/>
        <Route path="*" element={<Error/>}/>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
