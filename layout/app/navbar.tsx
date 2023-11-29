import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-evenly items-center bg-gray-200 p-4 text-sm">
      <div className="div">
        <Link href="/home">home</Link>
      </div>
      <div className="div">
        {" "}
        <Link href="/about"> about</Link>
      </div>
      <div className="div">
        {" "}
        <Link href="/contact">contact</Link>{" "}
      </div>
      <div className="div">
        {" "}
        <Link href="/portfolio">portfolio</Link>
      </div>
      <div className="div">
        {" "}
        <Link href="/login/loginuser">login user</Link>
      </div>
    </nav>
  );
}
