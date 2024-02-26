import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPage from "./EditPage";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header title="React JS Blog" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit-post/:id" element={<EditPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
