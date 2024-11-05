import {Outlet} from "react-router-dom";

const DocsLayout = () => {
    return (
        <div className="w-screen max-h-screen h-screen flex flex-col">
            
            <Outlet></Outlet>
        </div>
    )
}

export default DocsLayout