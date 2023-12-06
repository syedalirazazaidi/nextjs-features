import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET() {
  const listUser = users;
  return NextResponse.json({ res: listUser });
}
