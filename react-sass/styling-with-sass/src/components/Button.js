import React from "react";
import "./Button.scss";
import classNames from "classnames";
function Button({
  children,
  size,
  color,
  outline,
  fullwidth,
  className,
  ...rest
}) {
  return (
    <button
      className={classNames("Button", size, color, className, {
        outline,
        fullwidth
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};
export default Button;
