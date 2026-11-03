import React from 'react';
import { View } from 'react-native';
import { colors, spacing, typography } from '../../../../../theme';
import { CustomText } from '../../../../../shared';

export default function LoginHeader() {
  return (
     <View style={{ paddingHorizontal: spacing.xl, gap: spacing.xs, width: '100%' }}>
        <CustomText title='كل اللي تحتاجه، أقرب ليك' 
        color={colors.textPrimary} 
        size={typography.body1} 
        weight={typography.fontWeightBold}    
        align="start"/>
        <CustomText title='سجّل دخولك واكتشف الخدمات والأماكن والفرص المتاحة حواليك.'
        color={colors.textPrimary} 
        size={typography.body2} 
        weight={typography.fontWeightRegular} 
        align="start"/>
     </View>
  );
}
