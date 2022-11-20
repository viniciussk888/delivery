import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("screen").width;

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 20px;

  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.TouchableOpacity`
  width: ${windowWidth - 16}px;
  height: 100px;

  border-radius: 15px;
  padding: 16px;

  align-self: center;

  background-color: #363636;
`;

export const ErrorTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ErrorMessageWrapper = styled.View`
  margin-top: 12px;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const CloseIcon = styled(Feather).attrs({
  name: "x",
  size: 24,
  color: "#fff",
})``;
