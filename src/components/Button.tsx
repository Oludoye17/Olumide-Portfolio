// Button Component
import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "px-6 py-2 rounded-2xl font-medium text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500",
    outline:
      "border border-gray-500 text-gray-300 hover:bg-gray-800 focus:ring-gray-400",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;