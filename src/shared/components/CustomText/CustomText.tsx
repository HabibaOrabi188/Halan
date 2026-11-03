// src/shared/components/CustomText/CustomText.tsx
import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  View,
} from 'react-native';
import { CustomTextProps, TextAlign, TextSize, TextWeight } from '../../types';
import { styles } from './CustomText.styles';
import { colors, typography } from '../../../theme';

const resolveSize = (size?: TextSize): TextStyle | undefined => {
  if (!size) return undefined;
  if (typeof size === 'number') {
    return { fontSize: size };
  }
  if (typeof size === 'object' && 'fontSize' in size) {
    return size;
  }
  if (typeof size === 'string') {
    switch (size) {
      case 'sm':
        return typography.caption;
      case 'md':
        return typography.body1;
      case 'lg':
        return typography.h3;
      case 'h1':
      case 'h2':
      case 'h3':
      case 'body1':
      case 'body2':
      case 'caption':
        return typography[size];
      default:
        return undefined;
    }
  }
  return undefined;
};

const resolveWeight = (weight?: TextWeight): TextStyle['fontWeight'] | undefined => {
  if (!weight) return undefined;
  switch (weight) {
    case 'regular':
      return typography.fontWeightRegular;
    case 'medium':
      return typography.fontWeightMedium;
    case 'bold':
      return typography.fontWeightBold;
    default:
      return weight;
  }
};

const resolveColor = (color?: string): string => {
  if (!color) return colors.textPrimary;
  if (color in colors) {
    return (colors as Record<string, string>)[color];
  }
  return color;
};

const resolveAlign = (align?: TextAlign): TextStyle['textAlign'] | undefined => {
  if (!align) return undefined;
  if (align === 'start') return 'left';
  if (align === 'end') return 'right';
  if (align === 'center') return 'center';
  return align;
};

export const CustomText: React.FC<CustomTextProps> = ({
  title,
  children,
  variant,
  size,
  weight,
  color,
  align,
  padding,
  style,
  containerStyle,
  ...rest
}) => {
  const resolvedColor = color || colors.textPrimary;
  const sizeStyle = resolveSize(size);
  const resolvedWeight = resolveWeight(weight);
  const resolvedAlign = resolveAlign(align);

  const textStyle: StyleProp<TextStyle> = [
    styles.base,
    variant ? styles[variant] : undefined,
    sizeStyle,
    resolvedWeight !== undefined && { fontWeight: resolvedWeight },
    resolvedColor !== undefined && { color: resolvedColor },
    resolvedAlign !== undefined && { textAlign: resolvedAlign },
    style,
  ];

  const content = children ?? title;

  if (padding !== undefined || containerStyle) {
    return (
      <View style={[{ padding, width: '100%' }, containerStyle]}>
        <Text style={textStyle} {...rest}>
          {content}
        </Text>
      </View>
    );
  }

  return (
    <Text style={textStyle} {...rest}>
      {content}
    </Text>
  );
};

export default CustomText;
