'use client'
import React from 'react'
import { libreCaslonDisplay } from "@/app/fonts/index";
import Link from "next/link"
import { usePathname } from 'next/navigation'; // Use this hook to get the current pathname

export const Tab = () => {
    const pathname = usePathname(); // Get current route

    // Function to check if a tab is active
    const isActive = (path) => pathname === path;

    return (
        <div className={`${libreCaslonDisplay.className} flex justify-between w-full text-2xl border-b-1 border border-zinc-300 border-r-0 border-l-0 border-t-0 divide-x divide-zinc-300`}>
            <Link href="/" className={`w-1/2 text-center p-2 hover:bg-zinc-100 ${isActive("/") && 'bg-zinc-100'}`}>Jobs</Link>
            <Link href="/companies" className={`w-1/2 text-center  p-2 hover:bg-zinc-100 ${isActive("/companies") && 'bg-zinc-100'}`} >Companies</Link>
        </div>
    )
}