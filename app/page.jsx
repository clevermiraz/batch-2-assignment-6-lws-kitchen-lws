import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EmailSubscriptionSection from "@/components/Home/EmailSubscriptionSection";
import HandPickedCollection from "@/components/Home/HandPickedCollection";
import HeroSection from "@/components/Home/HeroSection";
import LatestRecipes from "@/components/Home/LatestRecipes";
import PopularCategories from "@/components/Home/PopularCategories";
import SuperDelicious from "@/components/Home/SuperDelicious";

export default function Home() {
    return (
        <main className="bg-white">
            <Header />

            <main class="container mx-auto px-4 mt-[100px]">
                <HeroSection />

                <SuperDelicious />

                <PopularCategories />

                <EmailSubscriptionSection />

                <HandPickedCollection />

                <LatestRecipes />
            </main>

            <Footer />
        </main>
    );
}
