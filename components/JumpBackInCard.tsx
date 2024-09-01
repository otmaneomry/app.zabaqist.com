import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const JumpBackInCard = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="rounded-lg p-4">
                    <div className="relative w-full h-40 mb-4">
                        <Image
                            src="/brilliant-image/data-analysis.png"
                            alt="Neural Networks illustration"
                            layout="fill"
                            objectFit="contain"
                            className="rounded"
                        />
                    </div>
                    <p className="text-sm text-purple-600 mb-2">CS & PROGRAMMING · LEVEL 5</p>
                    <h3 className="text-xl font-bold mb-4">Introduction to Neural Networks</h3>
                    <Button className="w-full">Continue path</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default JumpBackInCard;