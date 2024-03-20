import { ScrollViewProps } from "react-native";

type CutScrollViewProps = Pick<
  ScrollViewProps,
  "style" | "contentContainerStyle"
>;

export interface IngredientsProp extends CutScrollViewProps {
  horizontal?: boolean;
  ingredients: IngredientResponse[];
  selectedIngredients?: string[];
  handleToggleSelected?: (value: string) => void;
}
