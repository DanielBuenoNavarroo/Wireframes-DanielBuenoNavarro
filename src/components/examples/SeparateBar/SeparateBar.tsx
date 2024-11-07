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