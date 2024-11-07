import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Prism from "prismjs";
import "prism-themes/themes/prism-atom-dark.css"

type CodeViewerProps = {
    code: string,
    language?: string
}

const CodeViewer = ({code, language = "javascript"}: CodeViewerProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            toast.success("Component copied to clipboard!");
        } catch (err) {
            console.error("Error al copiar: ", err);
            toast.error(`Error: ${err}`);
        }
    };

    return (
        <div className="relative w-full" onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <button
                onClick={handleCopy}
                className={`absolute z-10 top-4 right-4 px-4 py-2 bg-zinc-700 text-white rounded text-sm hover:bg-zinc-600 focus:outline-none ${!isHovered && 'hidden'}`}
            >
                Copiar
            </button>
            <pre style={{border: "none", maxHeight: "30rem", padding: "1rem 2rem"}}>
                <code className={`language-${language} text-sm`}>{code.trim()}</code>
            </pre>
        </div>
    );
};

export default CodeViewer;
