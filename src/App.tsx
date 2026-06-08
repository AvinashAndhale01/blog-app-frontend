import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { PostDetails } from "./pages/PostDetails";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/create" element={<CreatePost />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
