const { NextResponse } = require("next/server");

export async function GET(req) {
  console.log("what is the problem");
  return NextResponse.json({ message: "heys" });
}
