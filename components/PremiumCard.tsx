import React from 'react';
import {Card, Button} from "@mantine/core";

const PremiumCard = () => (
    <Card padding="lg" radius="lg" withBorder style={{backgroundColor: '#fefce8'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Premium users are 6x more likely to reach their learning goals</p>
                <Button variant="default">Learn more</Button>
            </div>
            <div style={{fontSize: '2.25rem'}}>🏆</div>
        </div>
    </Card>
);

export default PremiumCard;
