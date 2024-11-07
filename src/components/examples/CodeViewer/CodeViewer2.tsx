import {useState} from "react";
import {toast} from "react-toastify";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeViewerProps = {
    code: string,
    language?: string
}

const CodeViewer2 = ({code, language = "javascript"}: CodeViewerProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            toast.success("Component copied to clipboard!");
        } catch (err) {
            console.error("Error: ", err);
            toast.error(`Error: ${err}`);
        }
    };

    return (
        <div className="relative bg-neutral-900" onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <button
                onClick={handleCopy}
                className={`absolute z-10 top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 focus:outline-none ${!isHovered && 'hidden'}`}
            >
                Copiar
            </button>
            <SyntaxHighlighter language={language} style={dark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeViewer2;