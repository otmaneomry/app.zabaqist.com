import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const StreakCard = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-4xl font-bold">0</CardTitle>
            <p>Solve <strong>3 problems</strong> to start a streak</p>
        </CardHeader>
        <CardContent>
            <div className="flex justify-between mb-4">
                {['Su', 'M', 'T', 'W', 'Th'].map((day, index) => (
                    <div key={index} className="text-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mb-1"></div>
                        <span>{day}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="font-bold">3</p>
                    <p className="text-sm">Longest streak</p>
                </div>
                <div>
                    <p className="font-bold">33</p>
                    <p className="text-sm">Lessons completed</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default StreakCard;