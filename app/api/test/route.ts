import { NextResponse } from "next/server";

export async function GET(request:Request){
return NextResponse.json({
    message:"Hello your api is working"
})
}