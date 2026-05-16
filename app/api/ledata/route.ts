import { NextRequest, NextResponse } from "next/server";
import {conn} from '@/models/database'
import ContactSchema from "@/models/cshema";

export async function POST(req:NextRequest){
    try {
        const data = await req.json();
        console.log(data);
        await conn()
        const nUser = new ContactSchema({
            username:data.username,
            mobile: data.mobile,
            email: data.email,
            desc: data.desc
        })
        await nUser.save()
        return NextResponse.json({status: 200, message:'subbmited'})
        
    } catch (error) {
        console.log(error, 'not working');
    }
}
