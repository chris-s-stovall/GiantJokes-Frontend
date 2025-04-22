declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const svgContent: React.FC<SvgProps>;
  export default svgContent;
}

declare module "*.png" {
  const pngContent: any;
  export default pngContent;
}

declare module "*.jpg" {
  const jpgContent: any;
  export default jpgContent;
}
