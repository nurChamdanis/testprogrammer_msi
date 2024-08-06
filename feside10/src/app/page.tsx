"use client";
import axios, { AxiosError } from "axios";
import { Link } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
   
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
    const payload = {
      email: event.currentTarget.username.value,
      password: event.currentTarget.password.value
    }
    try{
      const {data} = await axios.post("/api/auth/login", payload);
      alert(JSON.stringify(data));
      router.push('/dashboard');
      
    }catch(e){
      const error = e as AxiosError;
      alert(error);
    }
  }
  return (
  <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold mb-6">Login</h1>
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            placeholder="Email"
            type="email"
            id="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
      </form>
      <div className="btnRegister">
        <a href="/register" >
          Register
        </a> 
      </div>
    </div>
  </main>

  );
}
