import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 39" {...props}>
      <image
        width="205"
        height="40"
        href={isDark ? "/images/spartacus/LogoTextNewDark.png" : "/images/spartacus/LogoTextNewWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
