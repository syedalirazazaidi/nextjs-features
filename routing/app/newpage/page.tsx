import React from "react";
import { redirect } from "next/navigation";

function NewPage() {
  redirect("/about");
  return <div>NewPage page</div>;
}

export default NewPage;
