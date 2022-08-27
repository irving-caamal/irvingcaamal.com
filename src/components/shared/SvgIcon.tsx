import * as React from "react";
interface SvgIconProps {
  /**
   * Visually hidden text for screen readers.
   * http://web-accessibility.carnegiemuseums.org/code/svg/
   */
  accessibilityLabel?: string;

  className?: string;

  /** An SVG React component */
  icon: React.ComponentType<any>;

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
const SvgComponent: React.FC<SvgIconProps> = ({
  width,
  height,
  icon: IconComponent,
  accessibilityLabel,
  classes,
  size,
  ...rest
}) => (
  <IconComponent
    aria-labelledby={accessibilityLabel || undefined}
    aria-hidden={accessibilityLabel ? "false" : "true"}
    role={accessibilityLabel ? "img" : "presentation"}
    className={classes}
    style={{ width: width || size, height: height || size }}
    {...rest}
  />
);

export default SvgComponent;
