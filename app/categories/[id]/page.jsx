import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getRecipesByCategory } from "@/lib/getRecipesData";
import Image from "next/image";
import Link from "next/link";

export default function RecipeByCategory({ params }) {
    const { id } = params;

    const { recipes, categoryName } = getRecipesByCategory(id);

    console.log(recipes);

    return (
        <main class="bg-white text-gray-900">
            <Header />

            <main class="container mx-auto px-4 py-8 mt-[100px]">
                <div class="flex justify-between items-center mb-8">
                    <div>
                        <h1 class="text-4xl font-bold mb-2">
                            {categoryName}{" "}
                            <span class="text-gray-500 text-2xl font-normal">({recipes?.length} Recipes)</span>
                        </h1>
                        <p class="text-gray-600">
                            One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good
                            Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* card */}
                    {recipes?.map((recipe) => (
                        <Link
                            href={`/${recipe?.category_id}/${recipe?.title}`}
                            key={recipe?.title}
                            class="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <Image
                                width={192}
                                height={192}
                                src={`/assets/thumbs/${recipe?.thumbnail}`}
                                alt={recipe?.title}
                                class="w-full h-48 object-cover"
                            />
                            <div class="p-4">
                                <h2 class="font-semibold text-lg mb-2">{recipe?.title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </main>
    );
}
