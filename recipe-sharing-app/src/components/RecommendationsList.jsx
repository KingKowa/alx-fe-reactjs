import { useRecipeStore } from "../recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>
      {recommendations.length ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available!</p>
      )}
    </div>
  );
};

export default RecommendationsList;