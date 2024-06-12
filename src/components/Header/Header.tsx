import React from 'react'

function Header() {
    // create header using tailwindcss with logo, tagline with a height of 300px
    return (
        <header className="flex flex-col items-center justify-center h-300">
            <img src="/logo.svg" alt="logo" className="h-12 w-12" />
            <h1 className="text-2xl font-bold">Welcome to our website</h1>
        </header>
    )
}