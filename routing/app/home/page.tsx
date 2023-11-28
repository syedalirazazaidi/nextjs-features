"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  return (
    <div className=" min-h-screen space-x-6 items-center justify-between p-24">
      this is home component a simple landing page a wellcome message for
      visiting user
      <button
        className="bg-red-100 py-1 px-4 rounded-lg"
        onClick={() => router.push("/dashboard")}
      >
        go to users
      </button>
    </div>
  );
}

export default Home;
