import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from 'bcryptjs';
export async function POST(req){
    try {
        const {name, email,password}=await req.json()
        const hashPassword=await bcrypt.hash(password, 10)
            await connectMongoDB();
            await User.create({name,email,password:hashPassword});
        return NextResponse.json({message:'Register successfully'}, {status:201});
    } catch (error) {
        return NextResponse.json({message:'Error occurred'}, {status:500}); 
    }
}