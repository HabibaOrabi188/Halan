import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export function useKeyboard() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (e: KeyboardEvent) => {
      setKeyboardVisible(true);
      setKeyboardHeight(e.endCoordinates.height);
    });

    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return {
    isKeyboardVisible,
    keyboardHeight,
    dismiss: Keyboard.dismiss,
  };
}
