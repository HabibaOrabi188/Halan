
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialDesignIcons as Icon } from '@react-native-vector-icons/material-design-icons';

import { BottomTabParamList } from './types';

import {
  colors,
  scale,
  spacing,
  typography,
  vs,
} from '../../theme';

import HomeScreen from '../../features/home/pages/home';
import ExploreScreen from '../../features/explore/pages/explore/ExploreScreen';
import JobsListScreen from '../../features/jobs/pages/jobs_list';
import MyProfileScreen from '../../features/profile/pages/my_profile';

const Tab = createBottomTabNavigator<BottomTabParamList>();

// ========================================
// Tab Configuration
// ========================================

interface TabConfig {
  label: string;
  activeIcon: any;
  inactiveIcon: any;
}

const TAB_CONFIGS: Record<keyof BottomTabParamList, TabConfig> = {
  Home: {
    label: 'الرئيسية',
    activeIcon: 'home',
    inactiveIcon: 'home-outline',
  },
  Explore: {
    label: 'استكشف',
    activeIcon: 'compass',
    inactiveIcon: 'compass-outline',
  },
  Jobs: {
    label: 'الوظائف',
    activeIcon: 'briefcase',
    inactiveIcon: 'briefcase-outline',
  },
  Profile: {
    label: 'حسابي',
    activeIcon: 'account',
    inactiveIcon: 'account-outline',
  },
};

// ========================================
// Animated Tab Item
// ========================================

interface TabItemProps {
  name: keyof BottomTabParamList;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

const AnimatedTabItem: React.FC<TabItemProps> = ({
  name,
  isFocused,
  onPress,
  onLongPress,
}) => {
  const config = TAB_CONFIGS[name];

  const scaleAnim = useRef(
    new Animated.Value(isFocused ? 1 : 0.92),
  ).current;

  const opacityAnim = useRef(
    new Animated.Value(isFocused ? 1 : 0.65),
  ).current;

  const indicatorAnim = useRef(
    new Animated.Value(isFocused ? 1 : 0),
  ).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: isFocused ? 1.08 : 1,
        friction: 7,
        tension: 90,
        useNativeDriver: true,
      }),

      Animated.timing(opacityAnim, {
        toValue: isFocused ? 1 : 0.65,
        duration: 200,
        useNativeDriver: true,
      }),

      Animated.spring(indicatorAnim, {
        toValue: isFocused ? 1 : 0,
        friction: 7,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isFocused, scaleAnim, opacityAnim, indicatorAnim]);

  const indicatorScale = indicatorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={config.label}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.8}
      style={styles.tabButton}
    >
      <Animated.View
        style={[
          styles.tabContent,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <Icon
          name={isFocused ? config.activeIcon : config.inactiveIcon}
          size={scale(24)}
          color={
            isFocused
              ? colors.primary
              : colors.textMuted
          }
        />

        <Text
          numberOfLines={1}
          style={[
            styles.tabLabel,
            {
              color: isFocused
                ? colors.primary
                : colors.textMuted,

              fontWeight: isFocused
                ? typography.fontWeightBold
                : typography.fontWeightMedium,
            },
          ]}
        >
          {config.label}
        </Text>

        {/* Active Indicator */}
        {isFocused && (
          <View style={styles.indicatorContainer}>
            <Animated.View
              style={[
                styles.activeIndicator,
                {
                  transform: [
                    { scaleX: indicatorScale },
                  ],
                },
              ]}
            />
          </View>
        )}

      </Animated.View>
    </TouchableOpacity>
  );
};

// ========================================
// Custom Bottom Tab Bar
// ========================================

const CustomBottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          paddingBottom: Math.max(insets.bottom, 10),
        },
      ]}
    >
      <View style={styles.tabBarContent}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const routeName =
            route.name as keyof BottomTabParamList;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <AnimatedTabItem
              key={route.key}
              name={routeName}
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </View>
  );
};

// ========================================
// Bottom Tabs Navigator
// ========================================

export const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Jobs" component={JobsListScreen} />
      <Tab.Screen name="Profile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

// ========================================
// Styles
// ========================================

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: colors.backgroundLight,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,

    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.07,
        shadowRadius: 8,
      },

      android: {
        elevation: 10,
      },
    }),
  },

  tabBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: scale(8),
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
  },

  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: scale(64),
    gap: 5,
  },

  tabLabel: {
    ...typography.caption,
    fontFamily: typography.fontFamily,
    textAlign: 'center',
  },

  indicatorContainer: {
    height: 4,
    width: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  activeIndicator: {
    width: '100%',
    height: 3,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});

export default BottomTabs;


