import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div className="link-href">
          <Link href="/">HOME</Link>
          <Link href="/users">about</Link>
          <Link href="/users/about">portfolio</Link>
        </div>
      </div>
    </nav>
  );
}
