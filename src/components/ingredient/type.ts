import { PressableProps } from "react-native";

export interface IngredientProps extends PressableProps {
  image: string;
  name: string;
  selected?: boolean;
}
