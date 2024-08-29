import { sendMail } from "@/util/mail";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
    try {

        const data = await request.json()
        if (data) {
            await sendMail(data)
        }
        return NextResponse.json({ "message": "get the data" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ "message": error }, { status: 500 })
    }
}