import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editTitle = useStoreState((state) => state.editTitle);
  const editContent = useStoreState((state) => state.editContent);
  const getPostById = useStoreState((state) => state.getPostById);

  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditContent = useStoreActions((actions) => actions.setEditContent);
  const editPost = useStoreActions((actions) => actions.editPost);

  const post = getPostById(id);

  useEffect(() => {
    if (post) {
      setEditContent(post.content);
      setEditTitle(post.title);
    }
  }, [post, setEditContent, setEditTitle]);

  //Update Post
  const handleEdit = (id) => {
    const updatedPost = {
      id,
      title: editTitle,
      date: new Date().toTimeString(),
      content: editContent,
    };
    editPost(updatedPost);
    navigate(`/post/${id}`);
  };

  return (
    <main>
      {editTitle && (
        <>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 5px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Enter Title..."
              required
              id="title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              id="content"
              cols="30"
              rows="5"
              placeholder="Write your post..."
              style={{ resize: "none", fontSize: "20px", padding: "5px 10px" }}
              required
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <br />
            <button
              type="button"
              style={{ height: "40px", fontSize: "20px" }}
              onClick={() => handleEdit(id)}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h1>Post Not Found</h1>
          <Link to="/">Back to home</Link>
        </>
      )}
    </main>
  );
};

export default EditPage;
