import categoriesData from "../data/categories.json";
import recipesData from "../data/recipes.json";

export const randomHeroRecipe = recipesData[Math.floor(Math.random() * recipesData.length)];

export const superDeliciousRecipes = recipesData
    .map((recipe) => ({
        ...recipe,
        averageRating: recipe?.rating?.average_rating,
    }))
    .sort((a, b) => b.averageRating - a.averageRating) // Sort in descending order
    .slice(0, 3);

const categoryCount = recipesData.reduce((acc, recipe) => {
    const categoryId = recipe.category_id;
    acc[categoryId] = (acc[categoryId] || 0) + 1; // Increment count for the category
    return acc;
}, {});

const categoriesWithCount = categoriesData.map((category) => ({
    ...category,
    recipeCount: categoryCount[category.id] || 0, // Add recipe count, default to 0
}));

export const topCategories = categoriesWithCount
    .sort((a, b) => b.recipeCount - a.recipeCount) // Sort by count
    .slice(0, 6);

export const handPickedRecipes = (count = 2) => {
    const shuffledRecipes = recipesData.sort(() => 0.5 - Math.random());
    return shuffledRecipes.slice(0, count);
};

export const recentRecipes = recipesData
    .sort((a, b) => {
        const dateA = new Date(a.published_date);
        const dateB = new Date(b.published_date);
        return dateB - dateA;
    })
    .slice(0, 4)
    .map((recipe) => {
        const category = categoriesData.find((cat) => cat.id === recipe.category_id);
        return {
            ...recipe,
            category_name: category ? category.name : "Unknown", // Add category name or fallback
        };
    });

export const getRecipeDetail = (categoryId, recipeTitle) => {
    const recipe = recipesData.find((recipe) => recipe?.title === recipeTitle && recipe?.category_id === categoryId);

    return recipe || null; // Return null if no matching recipe is found
};

export const getAllCategories = categoriesData;

export const getRecipesByCategory = (categoryId) => {
    if (!categoryId) {
        return []; // Return an empty array if categoryId is not provided
    }

    const category = categoriesData.find((cat) => cat.id === categoryId);
    const categoryName = category ? category.name : null;

    // Filter recipes by category ID
    const recipes = recipesData.filter((recipe) => recipe.category_id === categoryId);

    return { recipes, categoryName };
};
