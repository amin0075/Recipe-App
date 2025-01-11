import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { categories } from "@/src/api/";

const Category = () => {
  const { id } = useLocalSearchParams();
  const currentCategory = categories.find((category) => category.id === id);

  if (!currentCategory) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Category not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">{currentCategory.name}</Text>
      <FlatList
        data={currentCategory.recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/recipe/${item.id}`} className="mb-4">
            <Image
              source={{ uri: item.image }}
              className="w-full h-48 rounded-lg"
            />
            <Text className="text-xl mt-2">{item.name}</Text>
          </Link>
        )}
      />
    </View>
  );
};

export default Category;
