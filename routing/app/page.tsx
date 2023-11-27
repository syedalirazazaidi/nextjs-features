import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen space-x-6 items-center justify-between p-24">
      <Link href="/about">About us</Link>
      <Link href="/contact">Contact us</Link>
    </main>
  );
}
