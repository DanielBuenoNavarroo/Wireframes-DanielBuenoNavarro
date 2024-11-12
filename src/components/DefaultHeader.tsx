import {Link, NavLink} from "react-router-dom";
import {routes} from "@/lib/data";
import {useState} from "react";
import {AlignJustify} from "lucide-react";

const DefaultHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full border-b border-white/10 z-50 fixed bg-neutral-950">
            <nav className="flex items-center justify-center md:justify-between px-8 py-2">
                <div className="px-4 relative w-full md:w-auto flex items-center justify-center">
                    <div
                        className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white via-white to-orange-600 blur-lg w-32 h-4 -z-10"}
                    />
                    <Link className="font-bold text-4xl py-4 sour-gummy-custom" to="/">
                        React<span className={"text-orange-600 "}>Kit</span>
                    </Link>
                    <AlignJustify
                        className={"absolute md:hidden top-1/2 transform -translate-y-1/2 left-0 z-50"}
                        onClick={toggleDropdown}
                    />
                </div>
                <div className={"hidden md:block"}>
                    {routes.map((link) => (
                        <NavLink
                            key={link.path}
                            className={({isActive}) =>
                                `font-semibold ${
                                    isActive ? "text-white" : "text-gray-400"
                                } hover:text-white p-4`
                            }
                            to={link.path}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                <div
                    className={`absolute top-20 left-0 w-screen h-screen ${isOpen ? 'block' : 'hidden'} md:hidden bg-black/80 z-40`}
                    onClick={toggleDropdown}
                >
                    <div className={'w-40 h-full bg-black flex flex-col items-center border-r border-white/15'}>
                        {routes.map((link) => (
                            <NavLink
                                key={link.path}
                                className={({isActive}) =>
                                    `font-semibold ${
                                        isActive ? "text-white" : "text-gray-400"
                                    } hover:text-white p-4`
                                }
                                to={link.path}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default DefaultHeader;
