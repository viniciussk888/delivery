import { TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { Text } from "../Text";
import { Container, ProfileImage, ContainerUser } from "./styles";
import { Feather } from "@expo/vector-icons";

const mockProfileImage =
  "https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg";

export function Header() {
  return (
    <Container>
      <ContainerUser>
        <ProfileImage resizeMode="contain" source={{ uri: mockProfileImage }} />
        <View>
          <Text size={14} opacity={0.9}>
            Bem vindo(a)
          </Text>
          <Text size={18} weight="700">
            ALBERTO ROCHA
          </Text>
        </View>
      </ContainerUser>
      <TouchableOpacity>
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    </Container>
  );
}
