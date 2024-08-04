import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const JumpBackInCard = () => (
    <Card>
        <CardContent>
            <p className="mb-2">CS & Programming · Level 5</p>
            <h3 className="text-xl font-bold mb-4">Introduction to Neural Networks</h3>
            <Button className="w-full">Continue path</Button>
        </CardContent>
    </Card>
);

export default JumpBackInCard;
