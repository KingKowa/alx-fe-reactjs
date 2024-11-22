import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert("Recipe deleted successfully!");
    navigate("/"); // Redirect to the main recipe list
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;