"use client";
import React from "react";

function CodeSnippet({ children }) {
  const [showSnippet, setShowSnippet] = React.useState(false);

  return (
    <>
      {showSnippet ? (
        children
      ) : (
        <div className="reveal">
          <button onClick={() => setShowSnippet(true)}>Reveal Content</button>
        </div>
      )}
    </>
  );
}

export default CodeSnippet;
