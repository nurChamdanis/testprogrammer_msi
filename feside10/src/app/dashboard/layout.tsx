"use client";

import axios, { AxiosError } from "axios";  
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  

interface UserResponse {
    user: {
        user: string;
    } | null;
    error: string | null;
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
    const [user, setUser] = useState<string | null>(null);
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter(); 
    useEffect(() => {
        (async () => {
            const { user, error } = await getUser();
            if (error) {
                // Redirect to the home page if there is an error
                router.push('/'); 
                return;
            }
            setSuccess(true); 
            setUser(user?.user ?? null);
            setLoading(false);
        })();
    }, [router]);

    if (loading) {
        return (
            <main className="min-h-screen bg-gray-100 flex flex-col">
            <p className="text-center text-gray-500">Loading...</p>;
        </main>
        );
    }


    const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault(); 
        router.push('/');
    }

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <nav className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        <a href="/dashboard">Dashboard</a>
                    </h1>
                    <div>
                        <p className="text-sm">{user}</p> {/* Display user email */}
                        <form onSubmit={handleLogout}>
                            <input type="submit" value="LOGOUT" />
                        </form>
                    </div>
                </nav>
            </header>
            <div className="flex-grow container mx-auto p-4">
                {children}
            </div>
        </main>
    );
}

async function getUser(): Promise<UserResponse> {
    try {
        const { data } = await axios.get("/api/auth/me");
        return {
            user: data,
            error: null,
        };
    } catch (e) {
        const error = e as AxiosError;
        return {
            user: null,
            error: error.message,
        };
    }
}
