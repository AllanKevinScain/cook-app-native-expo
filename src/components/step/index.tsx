import { Text, View } from "react-native";

import { styles } from "./styles";
import { StepProps } from "./type";

export const Step: React.FC<StepProps> = (props) => {
  const { step, description } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.step}>{step}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
