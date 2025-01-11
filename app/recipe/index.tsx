// import { router } from "expo-router";
// import { FlatList, Text, TouchableOpacity, View } from "react-native";

// const recipes = [
//   { id: "1", title: "Pasta" },
//   { id: "2", title: "Pizza" },
//   { id: "3", title: "Burger" },
// ];

// export default function RecipeListScreen() {
//   const handlePress = (id: string) => {
//     router.push(`/recipe/${id}`);
//   };

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       <FlatList
//         data={recipes}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={{
//               padding: 16,
//               borderBottomWidth: 1,
//               borderBottomColor: "#ccc",
//             }}
//             onPress={() => handlePress(item.id)}
//           >
//             <Text style={{ fontSize: 18 }}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }
