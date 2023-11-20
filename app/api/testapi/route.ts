/**
 * This endpoint is called internally with NextJS. 
 * Therefore it is not exposed to the public
 * This uses the server-only package to ensure the endpoint is only called by the server
 */

import 'server-only';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log("API HIT: ", request);
    return NextResponse.json("Test Response");
}