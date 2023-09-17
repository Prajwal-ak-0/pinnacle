import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

export async function GET(request: Request) {
  try {
    const properties = await prisma.listing.findMany({
      include: {
        user: true,
      }
    });
      return NextResponse.json(properties);
  } catch (error)
  {
    console.log(error);
    return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
  }
}