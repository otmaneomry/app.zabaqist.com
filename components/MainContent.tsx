import StreakCard from "./StreakCard";
import JumpBackInCard from "@/components/JumpBackInCard";
import ComebackCard from "@/components/ComebackCard";
import PremiumCard from "@/components/PremiumCard";
import ContinueLearningSection from "@/components/ContinueLearningSection";
import RecommendedSection from "@/components/RecommendedSection";
import {ScrollArea} from "@/components/ui/scroll-area";

const MainContent = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome, ma</h1>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4 space-y-6">
                    <StreakCard />
                    <JumpBackInCard />
                </div>

                <ScrollArea className="col-span-8 h-[calc(100vh-100px)]">
                    <div className="space-y-6 pr-4">
                        <ComebackCard />
                        <PremiumCard />
                        <ContinueLearningSection />
                        <RecommendedSection />
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default MainContent;