import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { Ingredients, Loading, Recipe } from "@/components";
import { useEffect, useState } from "react";
import { services } from "@/services";

export default function Recipes() {
  const { ingredient_ids } = useLocalSearchParams<{ ingredient_ids: string }>();

  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const ingredientsIds = ingredient_ids.split(",");
  const hasRecipes = recipes.length > 0;

  useEffect(() => {
    services.ingredients
      .findByIds(ingredientsIds)
      .then((res) => setIngredients(res))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsIds)
      .then((res) => setRecipes(res));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!hasRecipes) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <Ingredients
        horizontal
        style={styles.listContainer}
        contentContainerStyle={styles.listContentContainer}
        ingredients={ingredients}
      />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Recipe
            recipe={item}
            onPress={() => router.navigate(`/recipe/${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
        style={styles.flatRecipesStyle}
        contentContainerStyle={styles.flatRecipesContentStyle}
      />
    </View>
  );
}
