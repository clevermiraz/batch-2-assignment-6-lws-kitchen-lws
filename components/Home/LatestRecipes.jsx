import { recentRecipes } from "@/lib/getRecipesData";
import Image from "next/image";
import Link from "next/link";

export default function LatestRecipes() {
    return (
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8">Latest Recipes</h2>
            <div class="grid md:grid-cols-4 gap-8">
                {recentRecipes?.map((recipe) => (
                    <Link href={`/${recipe?.category_id}/${recipe?.title}`} key={recipe?.title}>
                        <Image
                            width={300}
                            height={300}
                            src={`/assets/thumbs/${recipe?.thumbnail}`}
                            alt={recipe?.title}
                            class="w-full h-[300px] object-cover rounded-lg mb-4"
                        />
                        <h3 class="text-lg font-semibold mb-2">{recipe?.title}</h3>
                        <p class="text-gray-600">{recipe?.category_name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
