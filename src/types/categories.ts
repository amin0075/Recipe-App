import { ImageSourcePropType } from "react-native";
import { IRecipe } from "./recipe";

export interface ICategory {
  id: string;
  name: string;
  image: ImageSourcePropType;
  recipes: IRecipe[];
}
