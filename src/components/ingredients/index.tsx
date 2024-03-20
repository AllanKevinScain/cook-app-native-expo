import { ScrollView } from "react-native";
import { Ingredient } from "../ingredient";
import { IngredientsProp } from "./type";

export const Ingredients: React.FC<IngredientsProp> = (props) => {
  const {
    ingredients,
    horizontal = false,
    style,
    contentContainerStyle,
    selectedIngredients,
    handleToggleSelected = () => null,
  } = props;

  return (
    <ScrollView
      horizontal={horizontal}
      showsVerticalScrollIndicator={false}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {ingredients.map((item) => (
        <Ingredient
          key={item.id}
          {...item}
          image={`${process.env.EXPO_PUBLIC_SUPABASE_IMAGE_PATH}/${item.image}`}
          selected={selectedIngredients?.includes(item.id)}
          onPress={() => handleToggleSelected(item.id)}
        />
      ))}
    </ScrollView>
  );
};
