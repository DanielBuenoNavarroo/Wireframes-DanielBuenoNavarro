import {DocsItems} from "@/lib/data";
import {NavLink} from "react-router-dom";

const LeftContainer = () => {
    return (
        <div className="w-60 h-screen border-r border-white/20 pl-10 pr-4 py-4">
            {DocsItems.map((item, index) => (
                <div key={index} className={'flex flex-col'}>
                    <h2 className={`font-bold text-sm mb-2 my-4 truncate`}>{item.title}</h2>
                    {item.links.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.url === "" ? "." : link.url}
                            end={link.url === ""}
                            className={({isActive}) =>
                                `font-semibold hover:text-white py-2 text-sm truncate
                                ${isActive ? "text-white underline" : "text-gray-400"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default LeftContainer;