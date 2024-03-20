import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ButtonProps } from "./type";

export const Button: React.FC<ButtonProps> = (props) => {
  const { title, ...rest } = props;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
