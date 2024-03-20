import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },
  listContainer: {
    height: 58,
    maxHeight: 58,
  },
  listContentContainer: {
    gap: 12,
    paddingHorizontal: 32,
  },
  flatRecipesStyle: {
    padding: 32,
  },
  flatRecipesContentStyle: {
    gap: 16,
  },
});
