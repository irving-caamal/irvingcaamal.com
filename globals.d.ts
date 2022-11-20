declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

/**
 * Type for SVG component generated by SVGR
 */
type SVGRComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
