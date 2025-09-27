import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyles = "font-bold rounded-lg transition active:scale-95";
  const variantStyles = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5",
    secondary: "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-3 py-1.5",
    outline: "border border-neutral-200 hover:bg-neutral-100 px-3 py-2",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}