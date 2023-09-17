import { NextResponse } from "next/server";
import { TbHorseToy } from "react-icons/tb";

interface IParams{
    propertyId?: string;
}

export async function GET(
    request: Request,
    {params}: {params: IParams}
){
    try {
        const { propertyId } = params;

        if(!propertyId){
            throw new Error("Property ID is required");
        }

        const property=await prisma?.listing.findMany({
            where: {
                id: propertyId
            }
        });

        if(!property){
            return NextResponse.json("Property not found");
        }

        return NextResponse.json(property);
    } catch (error) {
        console.log(error);
    }
}