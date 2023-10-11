import React, { useEffect, useState } from "react";
import KarticaDomaci from "./KarticaDomaci";
import axios from "axios";
import "/style.css";
function DrugiDomaci() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const BASE_URL = "https://dummyjson.com/products";
  // const getData = () => {
  //   fetch(`https://dummyjson.com/products/search?q=${search}`)
  //     .then((res) => res.json())
  //     .then((products) => setData(products.products));
  // };
  const getData2 = () => {
    axios
      .get(`${BASE_URL}/search?q=${search}`)
      .then((res) => setData(res.data.products));
  };
  useEffect(() => {
    //   getData();
    getData2();
  }, []);
  // console.log(data, "DATTA");
  // console.log(search, "SEARCH");
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
          // <KarticaDomaci
          // title={product.title}
          // brand={product.brand}
          // category={product.category}
          // description={product.descriprtion

          <KarticaDomaci product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default DrugiDomaci;
