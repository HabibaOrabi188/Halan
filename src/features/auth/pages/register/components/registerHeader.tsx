import React from 'react';
import { View } from 'react-native';
import { colors, spacing, typography } from '../../../../../theme';
import { CustomText } from '../../../../../shared';

export default function RegisterHeader() {
  return (
     <View style={{ paddingHorizontal: spacing.xl, gap: spacing.xs, width: '100%' }}>
        <CustomText title='يلا نبدأ رحلتك مع حالًا!' 
        color={colors.textPrimary} 
        size={typography.body1} 
        weight={typography.fontWeightBold}    
        align="start"/>
        <CustomText title="أنشئ حسابك واكتشف الخدمات والأماكن وفرص العمل القريبة منك."
        color={colors.textPrimary} 
        size={typography.body2} 
        weight={typography.fontWeightRegular} 
        align="start"/>
     </View>
  );
}
