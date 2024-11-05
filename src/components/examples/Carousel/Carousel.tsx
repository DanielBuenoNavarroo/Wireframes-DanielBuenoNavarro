import {useCallback, useEffect, useState} from "react";
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react'

type CarouselProps = {
    images: string[],
    autoPlay?: boolean,
    interval?: number,
}

const Carousel = ({images, autoPlay = true, interval = 5000}: CarouselProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [isHovered, setHovered] = useState<boolean>(false)

    const showNextImage = useCallback(() => {
        setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
    }, [images.length]);

    const showPrevImage = useCallback(() => {
        setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
    }, [images.length]);
    const showImageIndex = (index: number) => {
        setImageIndex(index)
    }

    useEffect(() => {
        if (!autoPlay || isHovered) return;

        const timeoutId = setTimeout(showNextImage, interval);
        return () => clearTimeout(timeoutId);
    }, [isHovered, showNextImage, autoPlay, interval, imageIndex]);

    const circleClassName = 'stroke-white fill-black w-4 mx-0.5 hover:scale-125 focus-visible:scale-125 transition-all duration-100 ease-in-out'

    return (
        <section className={`w-full h-full relative`} onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}>
            <div className={`w-full h-full overflow-hidden flex`}>
                {images.map(url => (
                    <img
                        key={url} src={url} alt=""
                        className={`w-full h-full object-cover shrink-0 flex-grow-0 transition-all duration-300 ease-in-out`}
                        style={{translate: `${-100 * imageIndex}%`}}
                    />
                ))}
            </div>
            <button
                className={`absolute top-0 bottom-0 p-4 cursor-pointer left-0 group hover:bg-black focus-visible:bg-black hover:bg-opacity-20 focus-visible:opacity-20 transition-colors ease-in-out duration-200`}
                onClick={showPrevImage}
            >
                <ArrowBigLeft className="group-hover:animate-squish focus-visible:animate-squish"/>
            </button>
            <button
                className={`absolute top-0 bottom-0 p-4 cursor-pointer right-0 group hover:bg-black focus-visible:bg-black hover:bg-opacity-20 focus-visible:opacity-20 transition-colors ease-in-out duration-200`}
                onClick={showNextImage}
            >
                <ArrowBigRight className="group-hover:animate-squish focus-visible:animate-squish"/>
            </button>
            <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2`}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => showImageIndex(index)}>
                        {index === imageIndex ?
                            <CircleDot className={circleClassName}/> : <Circle className={circleClassName}/>
                        }
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Carousel;