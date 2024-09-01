import StreakCard from "./StreakCard";
import JumpBackInCard from "@/components/JumpBackInCard";
import ComebackCard from "@/components/ComebackCard";
import PremiumCard from "@/components/PremiumCard";
import ContinueLearningSection from "@/components/ContinueLearningSection";
import RecommendedSection from "@/components/RecommendedSection";
import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";

const MainContent = () => {
    return (
        <div className="container mx-auto p-6 max-w-6xl">

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Welcome, ma</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <StreakCard/>
                            <ComebackCard/>
                        </div>
                    </section>
                </div>

                <ScrollArea className="col-span-8 h-[calc(100vh-100px)1]">
                    <div className="space-y-6 pr-4">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Jump back in</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <JumpBackInCard/>
                                <PremiumCard/>
                            </div>
                        </section>
                        <ContinueLearningSection/>
                            <RecommendedSection/>
                    </div>
                </ScrollArea>
            </div>
        </div>
);
};

export default MainContent;