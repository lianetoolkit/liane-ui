import React from "react";

const Button = ({ children, type, className, style, onClick, size, fluid }) => {
  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-4 px-5 text-base",
    lg: "py-6 px-7 text-lg",
  };
  const types = {
    primary: "bg-primary text-white rounded-md hover:bg-purple-900",
    secondary:
      "text-primary border border-purple-500 bg-white rounded-md hover:bg-gray-100",
    tertiary: "text-black border-gray border rounded-md",
    ghost: "text-primary bg-transparent",
    destructive: "bg-red text-white rounded-md hover:bg-red-900",
    inverse: "text-primary bg-white rounded-md",
  };
  return (
    <div
      style={style}
      className={`transition duration-300 ease-in-out ${
        className ? className : ``
      } ${size ? sizes[size] : sizes.md} ${type ? types[type] : types.ghost}
      ${fluid ? "block" : "inline-block"} cursor-pointer`}
    >
      {children}
    </div>
  );
};
export default Button;
