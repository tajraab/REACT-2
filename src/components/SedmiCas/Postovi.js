import React from "react";
export default function Postovi({ posts }) {
  return (
    <div className="postt">
      <h1>
        <span className="keys">{posts.title}</span>
      </h1>
      <h2>
        <span className="keys">{posts.reactions}</span>
      </h2>
    </div>
  );
}
