import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";
import { SelectedProps } from "./type";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Button } from "@/components";

export const Selected: React.FC<SelectedProps> = (props) => {
  const { quantity, onClear = () => null, onSearch = () => null } = props;

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
};
