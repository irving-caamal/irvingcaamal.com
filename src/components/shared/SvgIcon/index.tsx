import React, { forwardRef } from "react";
interface ISvgIconProps {
  /**
   * Visually hidden text for screen readers.
   * http://web-accessibility.carnegiemuseums.org/code/svg/
   */
  accessibilityLabel?: string;

  className?: string;

  /** An SVG React component */
  icon: any;

  /**
   * If supplied, will set the width and height of the icon.
   * Note, takes an arbitrary number for now until we have CSS defaults.
   */
  size?: number;

  /** The width of the icon. */
  width?: number;

  /** The height of the icon. */
  height?: number;
  /* Extra*/
  classes?: string;
}
const SvgIcon = forwardRef(
  (
    {
      width,
      height,
      icon: IconComponent,
      accessibilityLabel,
      classes,
      size,
      ...rest
    }: ISvgIconProps,
    ref
  ) => {
    return (
      <IconComponent
        ref={ref}
        data-testid="svg-icon"
        aria-labelledby={accessibilityLabel || undefined}
        aria-hidden={accessibilityLabel ? "false" : "true"}
        role={accessibilityLabel ? "img" : "presentation"}
        className={classes}
        style={{ width: width || size, height: height || size }}
        {...rest}
      />
    );
  }
);
SvgIcon.displayName = "SvgIcon";
export default SvgIcon;
