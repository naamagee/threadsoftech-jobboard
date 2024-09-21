import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tab } from "../../components/Header/Tab";

export default async function Companies() {
    const data = await fetch(`http://localhost:3000/api/`)
    const companies = await data.json()
console.log("com", companies)
    if (!companies || companies.length === 0 || companies.data.length === 0) return (
        <>
         <main className="relative h-screen">
                <div className="bg-sky-100 w-full h-auto p-4">
                    <Header />
                </div>
                <Tab/>
                <div className="container mx-auto  p-4 overflow-x-auto"></div>
             
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
                <Tab/>
                <div className="container mx-auto  p-4 overflow-x-auto">
                    <table className="table table-auto ">
                        <thead className="text-left bg-sky-100">
                            <tr className="  text-left uppercase ">
                                <th className="p-4">Name</th>
                                <th className="py-4">Description</th>
                                <th className=" p-4">Location</th>
                                <th className=" py-4">Website</th>
                                {/* <th>Want an Intro?</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company, index) => (
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
                                        {company.canIntro && <a href={`mailto:info@threadsoftech.com?subject=Inquiry about ${company.name}`} className="text-blue-500 hover:underline">
                                            Get An Intro!
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

