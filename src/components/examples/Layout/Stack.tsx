import { cn } from "@/lib/utils";
import Box, { BoxProps } from "./Box";

type StackProps = BoxProps;

const Stack = ({ className, ...props }: StackProps) => {
    return (
        <Box className={cn("flex flex-col items-start", className)} {...props} />
    );
};

export default Stack