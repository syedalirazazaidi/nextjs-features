"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       });
  //   }, []);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="bg-gray-100 ">
      {data &&
        data.products
          .slice(0, 10)
          .map((pro: any) => (
            <div className="border rounded-md bg-teal-100 p-1">{pro.title}</div>
          ))}
    </div>
  );
}
