import React from "react";
import InputTitle from "./InputTitle";
import InputContent from "./InputContent";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const title = useStoreState((state) => state.title);
  const content = useStoreState((state) => state.content);
  const posts = useStoreState((state => state.posts));

  const setTitle = useStoreActions((actions) => actions.setTitle);
  const setContent = useStoreActions((actions) => actions.setContent);
  const addPost = useStoreActions((actions) => actions.addPost);

  // Add Post
  const handleAdd = (e) => {
    e.preventDefault();
    const id = posts.length
      ? (parseInt(posts[posts.length - 1].id) + 1).toString()
      : "1";
    const newPost = { id, title, date: new Date().toTimeString(), content };
    addPost(newPost);
    navigate("/");
  };

  return (
    <main>
      <form
        style={{ display: "flex", flexDirection: "column", margin: "20px 5px" }}
      >
        <InputTitle title={title} setTitle={setTitle} />
        <InputContent content={content} setContent={setContent} />
        <br />
        <button type="button" style={{ height: "40px", fontSize: "20px" }} onClick={handleAdd}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
