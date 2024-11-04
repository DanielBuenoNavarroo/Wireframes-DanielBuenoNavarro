import {cn} from '@/lib/utils'
import {cva, type VariantProps} from "class-variance-authority";
import {ComponentProps} from "react";

const toastStyles = cva(
    [
        "w-full",
        "rounded-sm",
    ],
    {
        variants: {
            theme: {
                light: "text-black",
                dark: "text-white",
            }
        },
        defaultVariants: {
            theme: "light",
        }
    }
)

type ToastProps = ComponentProps<"div"> & VariantProps<typeof toastStyles>;

const Toast = () => {
    return (
        <div></div>
    )
}

export default Toast