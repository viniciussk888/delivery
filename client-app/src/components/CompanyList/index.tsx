import { FlatList, View } from "react-native";

import { Text } from "../Text";
import {} from "@expo/vector-icons/";
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";
import { Company } from "../../types/Company";
import { AntDesign } from "@expo/vector-icons";

interface CompanyListProps {
  companies: Company[];
}

export function CompanyList({ companies }: CompanyListProps) {
  const renderLabelBottomByType = (type: string) => {
    switch (type) {
      case "product":
        return "Aberto agora";
      case "service":
        return "Agenda disponível";
      default:
        return "Aberto agora";
    }
  };

  return (
    <>
      <FlatList
        data={companies}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
        keyExtractor={(company) => company._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: company }) => (
          <ProductContainer disabled={!company.isOpen} onPress={() => {}}>
            <View
              style={{
                backgroundColor: "#d73035",
                padding: 7,
                borderRadius: 8,
              }}
            >
              <ProductImage
                source={{
                  uri: `https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-empresa-de-hamburguer-de-frango_292879-605.jpg`,
                }}
              />
            </View>
            <ProductDetails>
              <Text weight="600">{company.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {company.description}
              </Text>
              <Text
                size={14}
                weight="600"
                color={company.isOpen ? "green" : "red"}
              >
                {company.isOpen
                  ? renderLabelBottomByType(company.type)
                  : "Fechado"}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => {}}>
              <AntDesign name="hearto" size={20} color="red" />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
