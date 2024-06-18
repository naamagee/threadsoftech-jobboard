import {Button as HeadlessButton} from "@headlessui/react"
import React from "react";

const Button = ({ children, secondary = false }: { children: React.ReactNode, secondary?: boolean }) => {
    const className = `inline-flex items-center gap-2 rounded-xl bg-${
        secondary ? "sky-100" : "black"
        } py-1 px-3 text-${secondary ? "black" : "sky-100"} shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-${
        secondary ? "sky-200" : "gray-800"
        } data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white`;
       
    return (
        <HeadlessButton className={className} >
            {children}
        </HeadlessButton>
    );
    }
export default Button