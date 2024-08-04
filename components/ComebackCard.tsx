import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ComebackCard = () => (
    <Card>
        <CardContent className="text-center py-6">
            <div className="mb-4 text-4xl">🏆</div>
            <h3 className="text-xl font-bold mb-2">It's comeback time!</h3>
            <p className="mb-4">You finished #26 and kept your spot in the Hydrogen League</p>
            <Button variant="outline" className="w-full">Continue</Button>
        </CardContent>
    </Card>
);

export default ComebackCard;