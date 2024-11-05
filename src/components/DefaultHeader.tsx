import {Link, NavLink} from "react-router-dom";

const DefaultHeader = () => {
    const routes = [
        {name: "Pricing", path: "/pricing"},
        {name: "Documentation", path: "/docs"},
        {name: "Contact", path: "/contact"},
        {name: "About", path: "/about"},
    ];
    return (
        <header className="w-full bg-transparent">
            <nav className="flex items-center justify-between border-b border-white/10 px-8 bg-transparent">
                <div className="p-4">
                    <Link className="font-bold text-3xl py-4" to="/">
                        SUPERTOKENS
                    </Link>
                </div>
                <div>
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
            </nav>
        </header>
    );
};

export default DefaultHeader;
