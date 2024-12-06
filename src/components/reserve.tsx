'use client'
import { useState } from 'react';
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { ImBlogger } from "react-icons/im";

export default function NavbarComp() {
    const [activeTab, setActiveTab] = useState("Home");

    const navContent = [
        { name: "Home", href: "#", navIcon: <IoHome /> },
        { name: "About", href: "#", navIcon: <RxAvatar /> },
        { name: "Projects", href: "#", navIcon: <FaProjectDiagram /> },
        { name: "Contact", href: "#", navIcon: <MdPermContactCalendar /> },
        { name: "Blog", href: "#", navIcon: <ImBlogger /> },
    ];

    return (
        <Navbar shouldHideOnScroll>
            <NavbarContent className="hidden sm:flex gap-4 border-[1.5px] border-white backdrop-blur-md p-3 shadow-lg rounded-2xl" justify="center">
                {
                    navContent.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                color="foreground"
                                href={item.href}
                                className={`flex px-2 py-1 gap-2 rounded-md transition-colors 
                                    ${activeTab === item.name
                                        ? 'bg-opacity-20 bg-white backdrop-blur-md shadow-lg'
                                        : 'hover:bg-opacity-10 hover:bg-white backdrop-blur-md'
                                    }`}
                                onClick={() => setActiveTab(item.name)}
                            >
                                {item.navIcon}
                                {item.name}
                            </Link>


                        </NavbarItem>
                    ))
                }
            </NavbarContent>
        </Navbar>
    );
}