import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required.";
    if (!ingredients.trim()) errors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").length < 2)
      errors.ingredients = "Please list at least two ingredients.";
    if (!steps.trim()) errors.steps = "Preparation steps are required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add a New Recipe</h1>
      <form
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="ingredients"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="steps"
          >
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            rows="6"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
