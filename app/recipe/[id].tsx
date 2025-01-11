import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { categories } from "@/src/api/";

const RecipeDetail = () => {
  const { id } = useLocalSearchParams();

  // Find the recipe by ID
  let recipe = null;
  for (const category of categories) {
    recipe = category.recipes.find((r) => r.id === id);
    if (recipe) break;
  }

  if (!recipe) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      {/* Recipe Image */}
      <Image
        source={{ uri: recipe.image }}
        className="w-full h-64 rounded-lg mb-4"
      />

      {/* Recipe Name */}
      <Text className="text-2xl font-bold mb-4">{recipe.name}</Text>

      {/* Ingredients Section */}
      <Text className="text-xl font-bold mb-2">Ingredients</Text>
      <View className="mb-6">
        {recipe.ingredients.map((ingredient) => (
          <View key={ingredient.id} className="flex-row items-center mb-2">
            <Image
              source={{ uri: ingredient.image }}
              className="w-12 h-12 rounded-full mr-3"
            />
            <Text className="text-lg">{ingredient.name}</Text>
          </View>
        ))}
      </View>

      {/* Steps Section */}
      <Text className="text-xl font-bold mb-2">Steps</Text>
      <View className="mb-6">
        {recipe.steps.map((step, index) => (
          <View key={index} className="flex-row items-start mb-3">
            <Text className="text-lg font-bold mr-2">{index + 1}.</Text>
            <Text className="text-lg flex-1">{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeDetail;
