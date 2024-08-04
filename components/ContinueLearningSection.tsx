import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ContinueLearningSection = () => (
    <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Continue learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Chemistry and Biology Puzzles', 'Group Theory', 'Computer Science Fundamentals'].map((course, index) => (
                <Card key={index}>
                    <CardContent className="p-4">
                        <h3 className="font-bold mb-2">{course}</h3>
                        <Progress value={33} className="mb-2" />
                        <p className="text-sm text-gray-600">33% complete</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <Button variant="outline" className="mt-4 w-full">Show more</Button>
    </section>
);

export default ContinueLearningSection;