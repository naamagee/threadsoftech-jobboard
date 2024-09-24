'use client'
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tab } from "../../components/Header/Tab";
import { CompanyDirectory } from "../../types";

export default function Companies() {
    const [companies, setCompanies] = useState<CompanyDirectory[]>([])
    const [loading, setLoading] = useState(true)
    const [sortCriteria, setSortCriteria] = useState<string>('name'); // Default sort by name
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc'); // Default sort direction

    const sortCompanies = (companies: CompanyDirectory[], criteria: string, direction: 'asc' | 'desc') => {
        return [...companies].sort((a, b) => {
            const comparison = a[criteria] < b[criteria] ? -1 : a[criteria] > b[criteria] ? 1 : 0;
            return direction === 'asc' ? comparison : -comparison; // Reverse comparison for descending
        });
    };

    const sortedCompanies = sortCompanies(companies, sortCriteria, sortDirection);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                setLoading(true)
                const response = await fetch(`/api/`)
                const data = await response.json()
                setCompanies(data)
            } catch (error) {
                console.error("Error fetching companies", error)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        fetchCompanies()
    }, [])

    if (loading) return (
        <>
            <main className="relative h-screen">
                <div className="bg-sky-100 w-full h-auto p-4">
                    <Header />
                </div>
                <Tab />
                <div className="container mx-auto mt-12 p-4 overflow-x-auto relative min-h-28">
                    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                        <div className="p-2 bg-gradient-to-tr animate-spin from-sky-200 to-sky-300 via-sky-100 rounded-full">
                            <div className="bg-white rounded-full">
                                <div className="w-8 h-8 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />
            </main>
        </>
    )

    if (!companies || companies.length === 0) return (
        <>
            <main className="relative h-screen">
                <div className="bg-sky-100 w-full h-auto p-4">
                    <Header />
                </div>
                <Tab />
                <div className="container mx-auto  p-4 overflow-x-auto">

                </div>

                <Footer />
            </main>
        </>
    )
    return (
        <>
            <main className="relative h-screen">
                <div className="bg-sky-100 w-full h-auto p-4">
                    <Header />
                </div>
                <Tab />
                <div className="container mx-auto  p-4 overflow-x-auto">
                    <div className="flex justify-end mb-4">
                        <label htmlFor="sortBy" className="mr-2">Sort By:</label>
                        <select
                            id="sortBy"
                            value={sortCriteria}
                            onChange={(e) => setSortCriteria(e.target.value)}
                            className="mr-2"
                        >
                            <option value="name">Name</option>
                            <option value="location">Location</option>
                        </select>
                        <button onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}>
                            {sortDirection === 'asc' ? '↑' : '↓'}
                        </button>
                    </div>
                    <table className="table table-auto ">
                        <thead className="text-left bg-sky-100">
                            <tr className="  text-left uppercase ">
                                <th className="p-4">Name</th>
                                <th className="py-4">Description</th>
                                <th className=" p-4">Location</th>
                                <th className=" py-4">Website</th>
                                {/* <th className="py-4 relative group">
                                    Want an Intro? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                    <div className="absolute right-full  p-4 bg-white border border-1 shadow-lg rounded text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        We'd love to learn about you, then make an intro.
                                    </div>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCompanies.map((company, index) => (
                                <tr key={index}>
                                    <td className=" font-bold  p-4 ">{company.name}</td>
                                    <td className="py-4  ">{company.description}</td>
                                    <td className="px-4  ">{company.location}</td>
                                    <td className="py-4  0">
                                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                                            {company.website}
                                        </a>
                                    </td>
                                    {/* <td>
                                        {company.canIntro && <a href={`mailto:info@threadsoftech.com?subject=Intro with ${company.name}`} className="text-blue-500 hover:underline">
                                            Get An Intro
                                        </a>}
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </main>
        </>
    );
}

