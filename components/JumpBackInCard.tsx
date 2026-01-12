import React from 'react';
import {Card, Button} from "@mantine/core";
import Image from "next/image";

const JumpBackInCard = () => {
    return (
        <Card padding="lg">
            <div style={{borderRadius: '0.5rem', padding: '1rem'}}>
                <div style={{position: 'relative', width: '100%', height: '10rem', marginBottom: '1rem'}}>
                    <Image
                        src="/brilliant-image/data-analysis.png"
                        alt="Neural Networks illustration"
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
                <p style={{fontSize: '0.875rem', color: '#9333ea', marginBottom: '0.5rem'}}>CS & PROGRAMMING · LEVEL 5</p>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem'}}>Introduction to Neural Networks</h3>
                <Button fullWidth>Continue path</Button>
            </div>
        </Card>
    );
};

export default JumpBackInCard;
