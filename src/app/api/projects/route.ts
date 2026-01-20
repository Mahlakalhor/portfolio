import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  return NextResponse.json([
    {
      id: uuidv4(),
      title: "Project 1",
      description: "Description 1",
      srcImage: "/img/project-1.png",
    },
  ]);
}
