import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import api from "./Api/posts";


const Home = () => {
  const searchResults = useStoreState((state) => state.searchResults);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get("/posts");
      setPosts(response.data);
    }

    fetchPosts();
  }, []);

  return (
    <main>
      {searchResults.length ? (
        <ul className="posts">
          {searchResults.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`} className="post-link">
                <h3 style={{ color: "black", fontSize: "1.5rem" }}>
                  {post.title}
                </h3>
                <h3 style={{ color: "black", fontSize: "1rem" }}>
                  {post.date}
                </h3>
              </Link>
              <h4>{`${post.content.slice(0, 50)}...`}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <h1 style={{ padding: "3rem" }}>No posts to display</h1>
      )}
    </main>
  );
};

export default Home;
