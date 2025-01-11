import { IIngredient } from "./ingredient";

export interface IRecipe {
  id: string;
  name: string;
  image: string;
  ingredients: IIngredient[];
  steps: string[];
}
