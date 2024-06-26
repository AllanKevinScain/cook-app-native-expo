import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { RecipeProps } from "./type";

export const Recipe: React.FC<RecipeProps> = (props) => {
  const { recipe, ...rest } = props;

  return (
    <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.8}>
      <ImageBackground source={{ uri: recipe.image }} style={styles.image}>
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "#000"]}
          style={styles.linear}
        >
          <Text style={styles.title} numberOfLines={1} lineBreakMode="tail">
            {recipe.name}
          </Text>

          <Text style={styles.minutes} numberOfLines={1} lineBreakMode="tail">
            {recipe.minutes} minutos
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
