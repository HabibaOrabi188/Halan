#!/bin/bash

FEATURE_NAME=$1
PAGE_NAME=$2

if [ -z "$FEATURE_NAME" ] || [ -z "$PAGE_NAME" ]; then
  echo "Usage: ./create-module.sh <feature> <page>"
  echo "Example: ./create-module.sh orders order_details"
  exit 1
fi

# Convert snake_case / kebab-case to PascalCase
to_pascal_case() {
  echo "$1" | awk -F'[_-]' '{
    for (i=1; i<=NF; i++) {
      $i=toupper(substr($i,1,1)) substr($i,2)
    }
    printf "%s", $0
  }'
}

PASCAL_NAME=$(to_pascal_case "$PAGE_NAME")

BASE_PATH="src/features/$FEATURE_NAME/pages/$PAGE_NAME"

mkdir -p "$BASE_PATH/components"
mkdir -p "$BASE_PATH/hooks"
mkdir -p "$BASE_PATH/services"

##########################################
# Screen.tsx
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.tsx"
import React from 'react';

import ${PASCAL_NAME}ScreenUI from './${PASCAL_NAME}Screen_UI';
import use${PASCAL_NAME}Screen from './${PASCAL_NAME}Screen.hooks';

const ${PASCAL_NAME}Screen: React.FC = () => {
  const props = use${PASCAL_NAME}Screen();

  return <${PASCAL_NAME}ScreenUI {...props} />;
};

export default ${PASCAL_NAME}Screen;
EOF

##########################################
# Screen_UI.tsx
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen_UI.tsx"
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './${PASCAL_NAME}Screen.styles';
import { ${PASCAL_NAME}ScreenProps } from './${PASCAL_NAME}Screen.types';
import { colors } from '../../../../theme';

const ${PASCAL_NAME}ScreenUI: React.FC<${PASCAL_NAME}ScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.foreground,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.foreground}
      />

      <View style={styles.container}>
        <Text>${PASCAL_NAME} Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ${PASCAL_NAME}ScreenUI;
EOF

##########################################
# styles.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.styles.ts"
import { scale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../../../theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.foreground,
    padding: scale(10),
    gap: scale(10),
  },
});
EOF

##########################################
# types.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.types.ts"
export interface ${PASCAL_NAME}ScreenProps {}
EOF

##########################################
# hooks.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.hooks.ts"
import { ${PASCAL_NAME}ScreenProps } from './${PASCAL_NAME}Screen.types';

const use${PASCAL_NAME}Screen = (): ${PASCAL_NAME}ScreenProps => {
  return {};
};

export default use${PASCAL_NAME}Screen;
EOF

##########################################
# service.ts
##########################################

cat <<EOF > "$BASE_PATH/${PASCAL_NAME}Screen.service.ts"
class ${PASCAL_NAME}ScreenService {}

export default new ${PASCAL_NAME}ScreenService();
EOF

##########################################
# components/index.ts
##########################################

cat <<EOF > "$BASE_PATH/components/index.ts"
export {};
EOF

##########################################
# hooks/index.ts
##########################################

cat <<EOF > "$BASE_PATH/hooks/index.ts"
export {};
EOF

##########################################
# services/index.ts
##########################################

cat <<EOF > "$BASE_PATH/services/index.ts"
export {};
EOF

##########################################
# index.ts
##########################################

cat <<EOF > "$BASE_PATH/index.ts"
export { default } from './${PASCAL_NAME}Screen';
EOF

echo "✅ Page '$PAGE_NAME' created successfully!"
echo "📁 Feature: $FEATURE_NAME"
echo "📂 Path: $BASE_PATH"

####.   ./create-module.sh auth register
