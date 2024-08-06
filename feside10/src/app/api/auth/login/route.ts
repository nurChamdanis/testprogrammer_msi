import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { COOKIE_API, COOKIE_NAME, URL_BE } from '../../../../../constant';
import axios from 'axios';
import { headers } from 'next/headers';

const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body; 

    const req = await axios.post(
        URL_BE +"/api/auth/token", 
        { 
            email: email,
            password: password
        },
        {
            headers: {
                "Content-Type": "application/json" // Setting the correct content type
            }
        }
    );

 
    const credential = serialize("CREDENTIAL", btoa(req.data.user.email), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: '/'
    });

    const userCookie = serialize(COOKIE_API, req.data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: '/'
    });

    const secret = process.env.JWT_SECRET || "default_secret";

    // Create a JWT token
    const token = sign({ email }, secret, { expiresIn: MAX_AGE });
    const serialezed = serialize(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: '/'
    });
    const _response = { 
        message: "Authenticated"
    };
    const result =  new Response(JSON.stringify(_response), {
        status: 200,
        // headers: { "Set-Cookie": serialezed},
    });
    result.headers.append('Set-Cookie', serialezed);
    result.headers.append('Set-Cookie', userCookie);
    result.headers.append('Set-Cookie', credential);
    return result;
}
