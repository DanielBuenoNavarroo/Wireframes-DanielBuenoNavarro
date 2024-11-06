import {DocsHeader, LeftContainer, RightContainer} from "@/containers/Docs";

const DocsLayout = () => {
    return (
        <div className="w-screen max-h-screen h-screen flex flex-col">
            <DocsHeader/>
            <div>
                <LeftContainer/>
                <RightContainer/>
            </div>
            
        </div>
    )
}

export default DocsLayout