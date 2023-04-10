import React, { useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <div className="grid md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
          {items.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <p className="flex justify-center items-center">No Data Found</p>
      )}
    </div>
  );
};

export default Home;
