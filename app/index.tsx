import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { router } from "expo-router";
import { categories } from "@/src/api/";

export default function HomeScreen() {
  return (
    <View className="flex-1 p-4 bg-white">
      {/* Welcome text and category text */}
      <Text className="text-3xl text-center mt-10">Welcome to Recipe App</Text>
      <Text className="text-2xl text-center my-5 font-bold">Categories</Text>

      {/* List of categories in two columns using FlatList */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns to 2
        columnWrapperStyle={{ justifyContent: "space-between" }} // Add spacing between columns
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[48%] mb-4 bg-white rounded-xl items-center shadow-sm shadow-black/20" // Tailwind classes for box shadow
            onPress={() => router.push(`/category/${item.id}`)}
          >
            <Image
              className="w-full rounded-tl-xl rounded-tr-xl h-48 mb-1"
              source={item.image}
            />
            <Text className="text-2xl font-bold text-center">{item.name}</Text>
            <Text className="text-base mb-2">Learn more</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
