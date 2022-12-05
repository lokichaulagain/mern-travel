import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const TextEditor = () => {
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <>
      <JoditEditor
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </>
  );
};

export default TextEditor;
