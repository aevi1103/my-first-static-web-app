import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Post from "./pages/post";
import Posts from "./pages/posts";

function App() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
