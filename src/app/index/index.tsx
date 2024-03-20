import { Alert, Text, View } from "react-native";
import { styles } from "./styles";
import { Ingredients, Selected } from "@/components";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { services } from "@/services";

export default function Index() {
  const [selectedIngredients, setSelectIngredients] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  function handleToggleSelected(value: string) {
    if (selectedIngredients.includes(value)) {
      return setSelectIngredients((s) => s.filter((i) => i !== value));
    }

    setSelectIngredients((s) => [...s, value]);
  }

  function handleListClear() {
    Alert.alert("Limpar", "Deseja limpar sua lista?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelectIngredients([]) },
    ]);
  }

  function handleSearchList() {
    router.navigate(`/recipes/${selectedIngredients}`);
  }

  useEffect(() => {
    services.ingredients.findAll().then((res) => setIngredients(res));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra as receitas baseadas nos produtos que você escolheu
      </Text>

      <Ingredients
        contentContainerStyle={styles.listContentContainer}
        handleToggleSelected={handleToggleSelected}
        ingredients={ingredients}
        selectedIngredients={selectedIngredients}
      />

      {selectedIngredients.length > 0 && (
        <Selected
          quantity={selectedIngredients.length}
          onClear={handleListClear}
          onSearch={handleSearchList}
        />
      )}
    </View>
  );
}
