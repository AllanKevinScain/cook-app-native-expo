import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";
import { IngredientProps } from "./type";

export const Ingredient: React.FC<IngredientProps> = (props) => {
  const { image, name, selected = false, ...rest } = props;

  return (
    <Pressable
      {...rest}
      style={[styles.container, selected && styles.selected]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
};
