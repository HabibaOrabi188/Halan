// src/app/navigation/types.ts
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  ServicesTab: undefined;
  JobsTab: undefined;
  ProfileTab: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
  Main: NavigatorScreenParams<BottomTabParamList> | undefined;
  Search: undefined;
  PlaceDetails: { id: string | number };
  JobDetails: { id: string | number };
  ServiceDetails: { id: string | number };
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Explore: undefined;
  Jobs: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type BottomTabNavProp = BottomTabNavigationProp<BottomTabParamList>;
export type MainTabNavProp = BottomTabNavProp;
