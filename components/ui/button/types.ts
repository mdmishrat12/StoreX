import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode;
    size?:"sm"|"md"|"lg"|"xl";
    variant?:"outline"|"default"|"primary"|"secondary"
    className?:string
}