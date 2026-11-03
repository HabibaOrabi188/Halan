
import React from 'react';

import {
  View,
  Text,
  StatusBar,
  FlatList,
  Pressable,
  useWindowDimensions,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './OnboardingScreen.styles';

import {
  OnboardingScreenProps,
  OnboardingSlideItem,
} from './OnboardingScreen.types';

import { colors } from '../../../../../theme';

const OnboardingScreenUI: React.FC<OnboardingScreenProps> = ({
  slides,
  currentIndex,
  onScrollBeginDrag,
  onSkipPress,
  flatListRef,
}) => {
  const { width } = useWindowDimensions();

  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView
        style={styles.slideContainer}
        edges={['top', 'bottom']}
      >
        {/* Header */}
        <View style={styles.header}>
          {!isLastSlide ? (
            <Pressable
              onPress={onSkipPress}
              style={styles.skipButton}
              hitSlop={{
                top: 12,
                bottom: 12,
                left: 12,
                right: 12,
              }}
            >
              <Text style={styles.skipText}>تخطي</Text>
            </Pressable>
          ) : (
            <View
              style={[
                styles.skipButton,
                {
                  backgroundColor: colors.foreground,
                  borderWidth: 0,
                },
              ]}
            >
              <Text
                style={[
                  styles.skipText,
                  { color: colors.foreground },
                ]}
              >
                تخطي
              </Text>
            </View>
          )}
        </View>

        <FlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: OnboardingSlideItem }) => (
            <View style={[styles.slide, { width }]}>
              <Image
                source={item.img}
                style={styles.img}
                resizeMode="stretch"
              />

              <View style={styles.slideContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={onScrollBeginDrag}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          style={styles.slideList}
          bounces={false}
        />

        {/* Pagination */}
        <View style={styles.footer}>
          <View style={styles.paginationContainer}>
            {slides.map((_, index) => {
              const isActive = index === currentIndex;

              return (
                <View
                  key={`dot-${index}`}
                  style={[
                    styles.dot,
                    isActive
                      ? styles.dotActive
                      : styles.dotInactive,
                  ]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OnboardingScreenUI;
