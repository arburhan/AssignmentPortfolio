'use client';
import { useState } from 'react';
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { ImBlogger } from "react-icons/im";
import { HiMenuAlt1, HiX } from "react-icons/hi";

export default function NavbarComp(): JSX.Element | null {
    const [activeTab, setActiveTab] = useState("Home");
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

    const navContent = [
        { name: "Home", href: "#", navIcon: <IoHome /> },
        { name: "About", href: "#", navIcon: <RxAvatar /> },
        { name: "Projects", href: "#", navIcon: <FaProjectDiagram /> },
        { name: "Contact", href: "#", navIcon: <MdPermContactCalendar /> },
        { name: "Blog", href: "#", navIcon: <ImBlogger /> },
    ];

    return (
        <Navbar shouldHideOnScroll>
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center p-4 sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl z-50"
                >
                    {isOpen ? null : <HiMenuAlt1 className=' text-[35px]' />}
                </button>
                <div className="text-xl font-bold pl-4">Md Borhan Uddin Ashik</div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-md z-40 flex flex-col items-start p-6 space-y-6 transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"
                    } sm:hidden`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-4xl text-white hover:scale-110 transition-transform"
                    aria-label="Close Menu"
                >
                    <HiX />
                </button>
                <p>Menu</p>
                {navContent.map((item, index) => (
                    <NavbarItem
                        key={index}
                        className="w-full list-none"
                    >
                        <Link
                            color="foreground"
                            href={item.href}
                            className={`flex items-center px-4 py-2 gap-3 text-lg text-white rounded-lg transition-all ${activeTab === item.name
                                ? "bg-white bg-opacity-10 backdrop-blur-md"
                                : "hover:bg-opacity-10 hover:bg-white backdrop-blur-sm"
                                }`}
                            onClick={() => {
                                setActiveTab(item.name);
                                setIsOpen(false);
                            }}
                        >
                            {item.navIcon}
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </div>

            {/* Desktop Navbar Content */}
            <div className="hidden sm:flex justify-center w-full">
                <NavbarContent className="gap-4 border-2 border-opacity-35 border-white backdrop-blur-md p-3 shadow-lg rounded-3xl">
                    {navContent.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                color="foreground"
                                href={item.href}
                                className={`flex px-2 py-1 gap-2 rounded-2xl transition-colors 
                                    ${activeTab === item.name
                                        ? 'bg-opacity-20 bg-white backdrop-blur-md shadow-lg border-[1.5px] border-opacity-30 border-white'
                                        : 'hover:bg-opacity-10 hover:bg-white backdrop-blur-md'
                                    }`}
                                onClick={() => setActiveTab(item.name)}
                            >
                                {item.navIcon}
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </div>
        </Navbar>
    );
}
