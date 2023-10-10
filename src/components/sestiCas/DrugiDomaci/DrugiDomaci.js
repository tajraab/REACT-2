import React, { useEffect, useState } from "react";
import KarticaDomaci from "./KarticaDomaci";
import "/style.css";
function DrugiDomaci() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((products) => setData(products.products));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data, "DATTA");
  console.log(search, "SEARCH");
  return (
    <div className="container">
      <div className="searchWrapper">
        <input
          placeholder="Search..."
          className="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img onClick={getData} height={30} width={30} />
      </div>
      <div className="cardWrapper">
        {/*<KarticaDomaci/>
        <KarticaDomaci/>*/}
        {data.map((product) => (
          //
          // <KarticaDomaci
          //title={product.title}
          //brand={product.brand}
          //category={product.category}
          // description={product.descriprtion

          <KarticaDomaci product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default DrugiDomaci;
