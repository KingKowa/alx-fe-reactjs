import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Existing recipes
  searchTerm: "", // Current search term
  filteredRecipes: [], // Array of recipes that match the search/filter criteria

  // Set the search term and trigger filtering
  setSearchTerm: (term) =>
    set((state) => {
      const lowerTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(lowerTerm) ||
            recipe.description.toLowerCase().includes(lowerTerm)
        ),
      };
    }),
}));

export default useRecipeStore;
