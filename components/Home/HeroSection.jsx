import { randomHeroRecipe } from "@/lib/getRecipesData";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section class="mb-16 bg-orange-50">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        width={450}
                        height={450}
                        src={`/assets/thumbs/${randomHeroRecipe?.thumbnail}`}
                        alt={randomHeroRecipe?.title}
                        class="w-full h-[450px] object-cover rounded-lg"
                    />
                </div>
                <div>
                    <h1 class="text-4xl font-bold mb-4">{randomHeroRecipe?.title}</h1>
                    <p class="text-gray-600 mb-4">{randomHeroRecipe?.description}</p>
                    <Link
                        href={`/${randomHeroRecipe?.category_id}/${randomHeroRecipe?.title}`}
                        class="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
                    >
                        View Recipe
                    </Link>
                </div>
            </div>
        </section>
    );
}
