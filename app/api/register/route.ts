import bcrypt from 'bcrypt'
import {NextResponse} from 'next/server'
import prisma from "@/app/lib/prismadb";

export async function POST(request:Request) {
    const body=await request.json();
    const {email,name,password}=body;

    if(!email || !name || !password){
        return NextResponse.json('Missing fields');
    }

    const hashedPassword=await bcrypt.hash(password,5);

    const user=await prisma.user.create({
        data:{
            email:email,
            name:name,
            hashedPassword:hashedPassword
        }
    })

    return NextResponse.json(user);
}