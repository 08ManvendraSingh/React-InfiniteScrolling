import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const InfiniteScroll = () => {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    const data = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`
    );
    console.log(data?.data);
    setCardData((prev) => [...prev, ...data?.data]);
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 10);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cardData.map((x, i) => (
          <Card key={x?.id} info={x} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
