import { CarouselPage, Introduction, SeparateBarPage } from "@/pages/Docs";

export const DocsItems = [
  {
    title: "Getting Started",
    links: [
      {
        url: "",
        label: "Introduction",
        component: Introduction,
      },
    ],
  },
  {
    title: "Components",
    links: [
      {
        url: "carousel",
        label: "Carousel",
        component: CarouselPage,
      },
      {
        url: "separate-bar",
        label: "Separate Bar",
        component: SeparateBarPage,
      },
    ],
  },
];

export const routes = [
  { name: "Docs", path: "/docs" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

export const cnCode = `
import clsx, {ClassValue} from 'clsx';
import {twMerge} from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))
`;

export const carrouselTSX = `
import { useCallback, useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';

type CarouselProps = {
    images: string[],
    autoPlay?: boolean,
    interval?: number,
};

const Carousel = ({ images, autoPlay = true, interval = 5000 }: CarouselProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [isHovered, setHovered] = useState<boolean>(false);

    const showNextImage = useCallback(() => {
        setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
    }, [images.length]);

    const showPrevImage = useCallback(() => {
        setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
    }, [images.length]);

    const showImageIndex = (index: number) => {
        setImageIndex(index);
    };

    useEffect(() => {
        if (!autoPlay || isHovered) return;
        const timeoutId = setTimeout(showNextImage, interval);
        return () => clearTimeout(timeoutId);
    }, [isHovered, showNextImage, autoPlay, interval, imageIndex]);

    const circleClassName = "stroke-white fill-black w-4 mx-0.5 hover:scale-125 focus-visible:scale-125 transition-all duration-100 ease-in-out";

    return (
        <section className="w-full h-full relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="w-full h-full overflow-hidden flex">
                {images.map(url => (
                    <img
                        key={url} src={url} alt=""
                        className="w-full h-full object-cover shrink-0 flex-grow-0 transition-all duration-300 ease-in-out"
                        style={{ translate: \`\${-100 * imageIndex}% \`}}
                    />
                ))}
            </div>
            <button
                className="absolute top-0 bottom-0 p-4 cursor-pointer left-0 group hover:bg-black focus-visible:bg-black hover:bg-opacity-20 focus-visible:opacity-20 transition-colors ease-in-out duration-200"
                onClick={showPrevImage}
            >
                <ArrowBigLeft className="group-hover:animate-squish focus-visible:animate-squish" />
            </button>
            <button
                className="absolute top-0 bottom-0 p-4 cursor-pointer right-0 group hover:bg-black focus-visible:bg-black hover:bg-opacity-20 focus-visible:opacity-20 transition-colors ease-in-out duration-200"
                onClick={showNextImage}
            >
                <ArrowBigRight className="group-hover:animate-squish focus-visible:animate-squish" />
            </button>
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => showImageIndex(index)}>
                        {index === imageIndex ?
                            <CircleDot className={circleClassName} /> : <Circle className={circleClassName} />
                        }
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
`;

export const SeparateBarTSX = `
import {cva, VariantProps} from "class-variance-authority";
import {ComponentProps, forwardRef} from "react";
import {cn} from "@/lib/utils";

const separateBarStyles = cva(
    "w-full h-2 rounded-full bg-gradient-to-r",
    {
        variants: {
            color1: {
                "slate": "from-slate-500",
                "gray": "from-gray-500",
                "zinc": "from-zinc-500",
                "neutral": "from-neutral-500",
                "stone": "from-stone-500",
                "red": "from-red-500",
                "orange": "from-orange-500",
                "amber": "from-amber-500",
                "yellow": "from-yellow-500",
                "lime": "from-lime-500",
                "green": "from-green-500",
                "emerald": "from-emerald-500",
                "teal": "from-teal-500",
                "cyan": "from-cyan-500",
                "sky": "from-sky-500",
                "blue": "from-blue-500",
                "indigo": "from-indigo-500",
                "violet": "from-violet-500",
                "purple": "from-purple-500",
                "fuchsia": "from-fuchsia-500",
                "pink": "from-pink-500",
                "rose": "from-rose-500"
            },
            color2: {
                "slate": "via-slate-500",
                "gray": "via-gray-500",
                "zinc": "via-zinc-500",
                "neutral": "via-neutral-500",
                "stone": "via-stone-500",
                "red": "via-red-500",
                "orange": "via-orange-500",
                "amber": "via-amber-500",
                "yellow": "via-yellow-500",
                "lime": "via-lime-500",
                "green": "via-green-500",
                "emerald": "via-emerald-500",
                "teal": "via-teal-500",
                "cyan": "via-cyan-500",
                "sky": "via-sky-500",
                "blue": "via-blue-500",
                "indigo": "via-indigo-500",
                "violet": "via-violet-500",
                "purple": "via-purple-500",
                "fuchsia": "via-fuchsia-500",
                "pink": "via-pink-500",
                "rose": "via-rose-500"
            },
            color3: {
                "slate": "to-slate-500",
                "gray": "to-gray-500",
                "zinc": "to-zinc-500",
                "neutral": "to-neutral-500",
                "stone": "to-stone-500",
                "red": "to-red-500",
                "orange": "to-orange-500",
                "amber": "to-amber-500",
                "yellow": "to-yellow-500",
                "lime": "to-lime-500",
                "green": "to-green-500",
                "emerald": "to-emerald-500",
                "teal": "to-teal-500",
                "cyan": "to-cyan-500",
                "sky": "to-sky-500",
                "blue": "to-blue-500",
                "indigo": "to-indigo-500",
                "violet": "to-violet-500",
                "purple": "to-purple-500",
                "fuchsia": "to-fuchsia-500",
                "pink": "to-pink-500",
                "rose": "to-rose-500"
            }
        },
        defaultVariants: {
            color1: "yellow",
            color2: "orange",
            color3: "blue"
        }
    }
);

type SeparateBarProps = ComponentProps<"div"> & VariantProps<typeof separateBarStyles>

const SeparateBar = forwardRef<HTMLDivElement, SeparateBarProps>(
    ({color1, color2, color3, ...props}, ref) => {
        return (
            <div ref={ref} className={cn(separateBarStyles({color1, color2, color3}))} {...props} />
        )
    }
)

export default SeparateBar
`;

export const exampleCode = `
function helloUser(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {helloUser(user)}!
  </h1>
);
`;
