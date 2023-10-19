import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterMedium30WhiteA700: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
