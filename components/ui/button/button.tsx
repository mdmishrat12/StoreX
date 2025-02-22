import { ButtonProps } from "./types"

const Button:React.FC<ButtonProps>=({
    children,
    variant="default",
    size="md",
    className,
    ...rest
})=>{
    const baseStyles = "font-semibold rounded-md transition-all duration-200 focus:outline-none";
    const variantStyles = {
        default:`bg-[tomato] text-white hover:bg-green-300`,
        outline:`bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50`,
        secondary:`bg-gray-500 text-white hover:bg-gray-600`,
        primary:``
    }
    const sizeStyles={
        sm:`px-3 py-1 text-sm`,
        md:`px-4 py-2 text-base`,
        lg:`px-6 py-3 text-lg`,
        xl:``
    }
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
return (
    <button className={combinedStyles} {...rest}>{children}</button>
)
}

export default Button