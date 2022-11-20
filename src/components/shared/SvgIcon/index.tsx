import React from "react";
import classnames from "classnames";
export interface ISvgIconProps {
  /**
   * Visually hidden text for screen readers.
   * http://web-accessibility.carnegiemuseums.org/code/svg/
   */
  accessibilityLabel?: string;

  className?: string;

  /** An SVG React component */
  icon: SVGRComponent;

  /**
   * If supplied, will set the width and height of the icon.
   * Note, takes an arbitrary number for now until we have CSS defaults.
   */
  size?: number;

  /** The width of the icon. */
  width?: number;

  /** The height of the icon. */
  height?: number;
}

/*
 * Icons are used to visually communicate meaning, actions, status, and feedback.
 */
const SvgIcon: React.FunctionComponent<ISvgIconProps> = ({
  accessibilityLabel,
  icon: IconComponent,
  size = "1em",
  width,
  height,
  className,
  ...rest
}) => {
  const classes = classnames(className);

  return (
    <IconComponent
      data-testid="svg-icon"
      aria-labelledby={accessibilityLabel || undefined}
      aria-hidden={accessibilityLabel ? "false" : "true"}
      role={accessibilityLabel ? "img" : "presentation"}
      className={classes}
      style={{ width: width || size, height: height || size }}
      {...rest}
    />
  );
};

export { SvgIcon };
