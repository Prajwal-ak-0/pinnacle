import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    title,
    description,
    imageSrc,
    category,
    minPrice,
    maxPrice,
    area,
    place,
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
        title,
        description,
        imageSrc,
        category,
        minPrice:parseInt(minPrice, 10),
        maxPrice:parseInt(maxPrice,10),
        area:parseInt(area, 10),
        place,
        userId: currentUser.id
    }
  });

  return NextResponse.json(listing);
}
