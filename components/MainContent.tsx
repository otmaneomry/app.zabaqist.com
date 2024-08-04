import StreakCard from "./StreakCard";
import JumpBackInCard from "@/components/JumpBackInCard";
import ComebackCard from "@/components/ComebackCard";
import PremiumCard from "@/components/PremiumCard";
import ContinueLearningSection from "@/components/ContinueLearningSection";
import RecommendedSection from "@/components/RecommendedSection";

const MainContent = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome, ma</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StreakCard />
                <JumpBackInCard />
                <ComebackCard />
                <PremiumCard />
            </div>

            <ContinueLearningSection />

            <RecommendedSection />
        </div>
    );
};

export default MainContent;