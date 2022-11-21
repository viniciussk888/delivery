import { Category, Icon } from "./styles";
import { categories } from "../../mocks/categories";
import { categoriesHome } from "../../mocks/categoriesHome";
import { Text } from "../Text";
import { FlatList } from "react-native";
import { useState } from "react";

interface CategoriesProps {
  isHome?: boolean;
}

export function Categories({ isHome }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={isHome ? categoriesHome : categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text size={20} opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Icon>
            <Text
              opacity={isSelected ? 1 : 0.5}
              size={14}
              weight="700"
              color={isSelected ? "#d73035" : "#000"}
            >
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
