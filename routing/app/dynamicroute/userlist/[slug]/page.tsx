import React from "react";

function AllUser({ params }: { params: { slug: string } }) {
  return <div>dynamic route {params.slug}</div>;
}

export default AllUser;
