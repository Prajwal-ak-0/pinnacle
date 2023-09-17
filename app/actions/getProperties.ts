import prisma from "@/app/lib/prismadb";

interface PropertParams {
  userId?: string;
}

export default async function getProperties({
  userId,
}: PropertParams){

  try {
    if(!userId) throw new Error("User id is required");

    const properties = await prisma.listing.findMany({
      where: {
        userId,
      },
    });

    const safeProperties = properties.map((property) => ({
      ...property,
      createdAt:property.createdAt.toISOString(),
    }));

    return safeProperties;
    
  } catch (error:any) {
    console.log(error);
  }
}