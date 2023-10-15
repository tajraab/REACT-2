import React, { useState, useEffect } from "react";
import "./style.css";
import Postovi from "./Postovi";
function SedmiCas() {
  const [defaultData, setDefaultData] = useState([]);
  useEffect(() => {
    fetch(
      "https://dummyjson.com/posts?limit=60&skip=30&select=title,reactions,userId"
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.posts);
        console.log(data);
      });
    console.log(defaultData);
  }, []);
  return (
    <div className="domaci">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <Postovi posts={posts} />)
      ) : (
        <h1>Nema podataka</h1>
      )}
    </div>
  );
}

export default SedmiCas;
