import {useEffect, useState} from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-xonokai.css"

type CodeViewerProps = {
    code: string,
    language?: string
}

const CodeViewer = ({code, language = "javascript"}: CodeViewerProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    // Función para copiar el código al portapapeles
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
        } catch (err) {
            console.error("Error al copiar: ", err);
        }
    };

    return (
        <div className="relative bg-neutral-900" onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            {/* Botón para copiar */}
            <button
                onClick={handleCopy}
                className={`absolute z-10 top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 focus:outline-none ${!isHovered && 'hidden'}`}
            >
                Copiar
            </button>

            {/* Visor de código */}
            <pre className="p-4 rounded-lg overflow-auto border-zinc-900" style={{border: "none"}}>
                <code className={`language-${language} text-sm`}>{code.trim()}</code>
            </pre>
        </div>
    );
};

export default CodeViewer;
