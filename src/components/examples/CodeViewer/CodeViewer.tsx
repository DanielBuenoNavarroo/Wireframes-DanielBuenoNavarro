import {useEffect, useState} from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-atom-dark.css"
import {Copy} from "lucide-react";

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
        } catch (err) {
            console.error("Error al copiar: ", err);
        }
    };

    return (
        <div className="relative w-full" onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <button
                onClick={handleCopy}
                className={`absolute z-10 top-4 right-4 text-white hover:text-gray-400 rounded text-xs ${!isHovered && 'hidden'}`}
            >
                <Copy />
            </button>
            <pre style={{border: "none", maxHeight: "30rem", padding: "1rem 2rem"}}>
                <code className={`language-${language} text-sm`}>{code.trim()}</code>
            </pre>
        </div>
    );
};

export default CodeViewer;
