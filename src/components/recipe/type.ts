import { TouchableOpacityProps } from "react-native";

export interface RecipeProps extends TouchableOpacityProps {
  recipe: {
    name: string;
    image: string;
    minutes: number;
  };
}
