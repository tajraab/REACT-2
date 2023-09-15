import React from "react";
import "../App.css";
function Card(props) {
  return (
    <div className="card">
      <h1>{props.ime}</h1>
      <h1>{props.datum}</h1>
      <h1>{props.godiste}</h1>
      <h1>{props.skola}</h1>
      <h1></h1>
    </div>
  );
}
export default Card;
