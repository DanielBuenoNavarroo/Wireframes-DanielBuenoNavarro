import { useCallback, useEffect, useState } from "react";

type AnimatedBoxProps = {
    content: string[],
    interval?: number,
    autoPlay?: boolean
}

const AnimatedBox = ({ content, interval = 3000, autoPlay = true }: AnimatedBoxProps) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextWordIndex = useCallback(() => {
        setWordIndex(index => (index === content.length - 1 ? 0 : index + 1));
    }, [content.length]);

    useEffect(() => {
        if (!autoPlay || isHovered) return;

        const timeoutId = setInterval(nextWordIndex, interval);
        return () => clearInterval(timeoutId);
    }, [isHovered, nextWordIndex, autoPlay, interval]);

    return (
        <div
            className="w-fit bg-blue-500 rounded-md px-3 py-0.5 relative transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1 className="bg-neutral-950 px-4 py-2 rounded-md transition-all duration-500 ease-in-out">
                {content[wordIndex]}
            </h1>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center gap-4">
                <h1 className="text-white/70 opacity-80">{content[wordIndex]}</h1>
                <h1 className="text-transparent">{content[wordIndex]}</h1>
                <h1 className="text-white/70 opacity-40">{content[wordIndex]}</h1>
                <h1 className="text-white/50 opacity-20">{content[wordIndex]}</h1>
                <h1 className="text-white/30 opacity-10">{content[wordIndex]}</h1>
            </div>
        </div>
    );
};

export default AnimatedBox;
