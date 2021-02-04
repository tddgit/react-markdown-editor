import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# sup");

  // function handleChange(e)

  return (
    <div className="app">
      <textarea
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      />

      <div className="preview">dsadfadfadf</div>
    </div>
  );
}
