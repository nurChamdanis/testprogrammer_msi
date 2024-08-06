import { cookies } from "next/headers";
import { COOKIE_NAME } from "../../../../../constant";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get(COOKIE_NAME);
    const credentialCookie = cookieStore.get('CREDENTIAL');
    if (!token) {
        return NextResponse.json(
            {
                message: "Unauthorized"
            },
            {
                status: 401
            }
        );
    }
    const email = credentialCookie ? atob(credentialCookie.value) : null;
    try {
        const {value}=token;
        const secret = process.env.JWT_SECRET || "default_secret";
        verify(value, secret);
        const response = {
            user: ""+email
        };
        return new Response(JSON.stringify(response), {
            status: 200, 
        });
    } catch (error) {
        const response = {
            user: "error secret user"
        };
        return new Response(JSON.stringify(response), {
            status: 400, 
        }); 
    } 
}