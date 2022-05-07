import * as React from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { colors } from './theme';

export const PlusIcon = (props) => (
  <Svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle transform="translate(50, 50)" r="40" fill={colors.primary.main} />
    <Circle transform="translate(50, 50)" r="40" stroke={colors.secondary.action} fill="none" strokeWidth={4} />
    <Rect x={50 - 3} y={50 - 25} width={6} height={50} fill={colors.secondary.action} />
    <Rect x={50 - 25} y={50 - 3} width={50} height={6} fill={colors.secondary.action} />
  </Svg>
)

export default PlusIcon;
