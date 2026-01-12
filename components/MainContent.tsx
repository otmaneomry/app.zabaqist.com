import StreakCard from "./StreakCard";
import JumpBackInCard from "@/components/JumpBackInCard";
import ComebackCard from "@/components/ComebackCard";
import PremiumCard from "@/components/PremiumCard";
import ContinueLearningSection from "@/components/ContinueLearningSection";
import RecommendedSection from "@/components/RecommendedSection";
import {ScrollArea} from "@mantine/core";
import React from "react";

const MainContent = () => {
    return (
        <div style={{maxWidth: '72rem', margin: '0 auto', padding: '1.5rem'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem'}}>
                <div style={{gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <section>
                        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Welcome, ma</h2>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}}>
                            <StreakCard/>
                            <ComebackCard/>
                        </div>
                    </section>
                </div>

                <ScrollArea style={{gridColumn: 'span 8', height: 'calc(100vh - 100px)'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '1rem'}}>
                        <section>
                            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Jump back in</h2>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}}>
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
