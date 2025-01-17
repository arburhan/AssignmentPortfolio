'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import { IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { ImBlogger } from "react-icons/im";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState("Home");

    const menuItems = [
        { name: "Home", href: "#", navIcon: <IoHome /> },
        { name: "About", href: "#", navIcon: <RxAvatar /> },
        { name: "Projects", href: "#", navIcon: <FaProjectDiagram /> },
        { name: "Contact", href: "#", navIcon: <MdPermContactCalendar /> },
        { name: "Blog", href: "#", navIcon: <ImBlogger /> },
    ];

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="md:grid" >
            {/* for desktop */}
            <div className="hidden sm:block">
                <NavbarContent className=" border-2 border-opacity-35 border-white backdrop-blur-md p-3 shadow-lg rounded-3xl">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                color="foreground"
                                href={item.href}
                                className={`flex px-2 py-1 gap-2 rounded-2xl transition-colors ${activeTab === item.name
                                    ? "bg-opacity-20 bg-white backdrop-blur-md shadow-lg border-[1.5px] border-opacity-30 border-white"
                                    : "hover:bg-opacity-10 hover:bg-white backdrop-blur-md"
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
            {/* for mobile device */}

            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Md Borhan Uddin Ashik</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarMenu className="gap-5 border-2 border-opacity-35 border-white backdrop-blur-md pt-16 shadow-lg rounded-3xl" >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}  >
                        <Link
                            color="foreground"
                            href={item.href}
                            className={`flex p-2 gap-2 rounded-2xl transition-colors  backdrop-blur-md shadow-lg border-[1.5px] border-opacity-30 border-slate-300 text-slate-300 ${activeTab === item.name
                                ? "bg-opacity-20 bg-slate-500  backdrop-blur-md shadow-lg border-[2.2px] border-opacity-50 border-white text-white"
                                : "hover:bg-opacity-10 hover:bg-white backdrop-blur-md"
                                }`}
                            onClick={() => setActiveTab(item.name)}
                        >
                            {item.navIcon}
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>

    );
}
