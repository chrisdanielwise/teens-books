import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const variants = {
  outline: {
    black_900: "outline outline-[1px] outline-black-900 text-black-900_b2",
  },
  fill: {
    gray_900: "bg-gray-900 text-white-A700",
    orange_700: "bg-orange-700 text-white-A700",
  },
};
const sizes = { xs: "p-[9px]", sm: "pl-2.5 pr-3 py-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900", "gray_900", "orange_700"]),
};

export { Button };
