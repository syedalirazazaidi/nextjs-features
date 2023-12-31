"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className=" min-h-screen space-x-6 items-center justify-between p-24">
      <h2>Dynamically Route</h2>

      {/* <Link href="/dynamicroute/userlist/1">user 1</Link>
      <Link href="/dynamicroute/userlist/2">user 2</Link>
      <Link href="/dynamicroute/userlist/3">user 3</Link>
      <Link href="/dynamicroute/userlist/4">user 4</Link> */}
      <Link href="/products/1">user 1</Link>
      <Link href="/products/2">user 2</Link>
      <Link href="/products/3">user 3</Link>
      <Link href="/products/4">user 4</Link>

      {/* <h2>route using Link</h2> */}
      {/* <Link href="/about">About us</Link>
      <Link href="/contact">Contact us</Link>
      <Link href="/products/allproducts"> Go to ALL Products Route</Link>
      <Link href="/products/specificproduct">Go to ALL Products Route</Link> */}
      {/* <h2>Programatically Route</h2>
      <div className=" bg-gray-200 flex space-x-10 w-[120px]">
        <hr />
        <div
          className="hover:cursor-pointer hover:bg-teal-500"
          onClick={() => router.push("/page1")}
        >
          Read
        </div>
        <div
          className="hover:cursor-pointer hover:bg-green-500"
          onClick={() => router.push("/page2")}
        >
          Write
        </div>
      </div> */}
    </main>
  );
}
