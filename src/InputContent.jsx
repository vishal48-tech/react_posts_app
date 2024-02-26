import React from "react";

const InputContent = ({ content, setContent }) => {
  return (
    <>
      <textarea
        id="content"
        cols="30"
        rows="5"
        placeholder="Write your post..."
        style={{ resize: "none", fontSize: "20px", padding: "5px 10px" }}
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </>
  );
};

export default InputContent;
