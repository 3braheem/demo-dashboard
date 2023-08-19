import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const cn = (...x: ClassValue[]) => {
    return twMerge(clsx(x));
}