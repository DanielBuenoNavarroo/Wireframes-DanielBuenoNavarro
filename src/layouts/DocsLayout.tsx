import {DocsHeader, LeftContainer, RightContainer} from "@/containers/Docs";

const DocsLayout = () => {
    return (
        <div className="w-screen max-w-screen-2xl max-h-screen h-screen">
            <DocsHeader/>
            <div className={'w-full h-full flex border-x border-white/20'}>
                <LeftContainer/>
                <RightContainer/>
            </div>
        </div>
    )
}

export default DocsLayout