import { NextResponse } from "next/server"

export async function GET() {
    
    const response = await fetch("https://api.github.com/users")

    if(response.ok){
        const data = await response.json()
        return NextResponse.json(data)
    }else{
        return NextResponse.error()
    }
}
