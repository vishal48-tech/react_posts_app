import React from "react";

const InputTitle = ({ title, setTitle }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Title..."
        required
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
};

export default InputTitle;
