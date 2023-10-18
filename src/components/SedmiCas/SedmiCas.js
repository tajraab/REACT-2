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
  }, [paginacija]);
  const handlePaginacijaClick = (page) => {
    setDefaultData(page);
  };
  return (
    <div className="paginacija">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <Postovi posts={posts} />)
      ) : (
        <h1>Nema podataka</h1>
      )}
      <div className="pagination">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={paginacija === page - 1 ? "active" : ""}
            onClick={() => handlePaginacijaClick(page - 1)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
//obnavljanje domaceg zadatka (prev-1);pagination

export default SedmiCas;
