import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const buttonStyle = {
    padding: "2px 20px",
    height: "40px",
    marginTop: "30px",
    fontSize: "16px",
    marginRight: "20px",
  };

  //Delete Post
  const handleDelete = (id) => {
    deletePost(id);
    navigate("/");
  };

  return (
    <main>
      <ul className="posts">
        <li key={post.id}>
          <h3 style={{ color: "black", fontSize: "1.5rem" }}>{post.title}</h3>
          <h3 style={{ color: "black", fontSize: "1rem" }}>{post.date}</h3>
          <h3>{post.content}</h3>
          <button
            style={buttonStyle}
            onClick={() => navigate(`/edit-post/${post.id}`)}
          >
            Edit Post
          </button>
          <button style={buttonStyle} onClick={() => handleDelete(post.id)}>
            Delete Post
          </button>
        </li>
      </ul>
    </main>
  );
};

export default PostPage;
