import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const PremiumCard = () => (
    <Card className="bg-yellow-50">
        <CardContent className="flex items-center justify-between p-6">
            <div>
                <p className="font-bold mb-2">Premium users are 6x more likely to reach their learning goals</p>
                <Button variant="secondary">Learn more</Button>
            </div>
            <div className="text-4xl">🏆</div>
        </CardContent>
    </Card>
);

export default PremiumCard;
