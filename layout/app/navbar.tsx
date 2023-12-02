"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
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
      {pathname === "/login/loginuser" ? (
        <div className="div">
          {" "}
          <Link href="/standardlayout">Standard layout</Link>
        </div>
      ) : (
        <div className="div">
          {" "}
          <Link href="/alternatelayout">Alternate layout</Link>
        </div>
      )}
    </nav>
  );
}
