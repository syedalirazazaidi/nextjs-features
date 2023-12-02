import React from "react";

// export default function Profile() {
//   async function getData() {
//     const res = await fetch("https://api.example.com/...");
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   }
//   const data = await getData();
//   return <div>A Profile page</div>;
// }

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Profile() {
  const data = await getData();

  return (
    <main>
      <div className="bg-gray-100 ">
        {data &&
          data.products.slice(10, 17).map((pro: any) => (
            <div className="border rounded-md bg-red-100 p-1" key={pro.id}>
              {pro.brand}
            </div>
          ))}
      </div>
    </main>
  );
}
