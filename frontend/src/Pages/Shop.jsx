import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import "./CSS/shop.css";

const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [popularInMen, setPopularInMen] = useState([]);

  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopular(data));
    fetch("http://localhost:4000/popularinmen")
      .then((res) => res.json())
      .then((data) => setPopularInMen(data));
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shop-page">
      <Hero />
      <Popular title="POPULAR IN WOMEN" data={popular} />
      <Popular title="POPULAR IN MEN" data={popularInMen} />

      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
