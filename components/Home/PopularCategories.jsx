import { topCategories } from "@/lib/getRecipesData";
import Image from "next/image";
import Link from "next/link";

export default function PopularCategories() {
    return (
        <section class="mb-16">
            <div class="flex justify-between items-top">
                <h2 class="text-3xl font-bold mb-8">Popular Categories</h2>
                <Link href="/categories" class="text-orange-500">
                    View All
                </Link>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
                {topCategories?.map((category) => (
                    <Link
                        href={`categories/${category?.id}`}
                        key={category?.id}
                        key={category?.id}
                        class="cursor-pointer text-center group"
                    >
                        <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                            <Image
                                width={80}
                                height={80}
                                src={`/assets${category?.image}`}
                                alt={category?.mame}
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <p class="transition-transform duration-300 group-hover:scale-105">{category?.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
