import { Stack } from "expo-router";
import { categories } from "@/src/api/";

// Import your global CSS file
import "../global.css";
import { View, Text } from "react-native";

type CategoryRouteParams = {
  id: string;
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="category/[id]"
        options={({ route }) => {
          const params = route.params as CategoryRouteParams;
          const title = categories.find(
            (category) => category.id === params.id
          )?.name;
          return {
            title: title || "Category",
          };
        }}
      />
      <Stack.Screen
        name="recipe/[id]"
        options={({ route }) => {
          console.log("route", route);
          const params = route.params as CategoryRouteParams;
          const title = categories.find(
            (category) => category.id === params.id
          )?.name;
          return {
            title: "Recipe Detail",
            headerBackTitle: "Back",
          };
        }}
      />
    </Stack>
  );
}
