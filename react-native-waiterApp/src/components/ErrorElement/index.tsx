import React, { FC, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

import {
  CloseButton,
  CloseIcon,
  ContentWrapper,
  ErrorMessage,
  ErrorMessageWrapper,
  ErrorTitle,
  Wrapper,
} from "./styles";

type ErrorElementProps = {
  onDismiss: () => void;
  title?: string;
  message: string;
};

export const ErrorElement: FC<ErrorElementProps> = ({
  onDismiss,
  title = "Ocorreu um erro",
  message,
}) => {
  const animated = useRef(new Animated.Value(0)).current;

  const handleDismiss = () => {
    Animated.timing(animated, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
    onDismiss();
  };

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: animated,
      }}
    >
      <Wrapper>
        <ContentWrapper onPress={handleDismiss}>
          <ErrorTitle>{title}</ErrorTitle>
          <ErrorMessageWrapper>
            <ErrorMessage>{message}</ErrorMessage>
          </ErrorMessageWrapper>

          <CloseButton onPress={handleDismiss}>
            <CloseIcon />
          </CloseButton>
        </ContentWrapper>
      </Wrapper>
    </Animated.View>
  );
};
