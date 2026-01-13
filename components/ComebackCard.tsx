import React from 'react';
import {Card, Button} from "@mantine/core";

const ComebackCard = () => (
    <Card padding="lg" radius="lg" withBorder>
        <div style={{textAlign: 'center'}}>
            <div style={{marginBottom: '1rem', fontSize: '2.25rem'}}>🏆</div>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>It s comeback time!</h3>
            <p style={{marginBottom: '1rem'}}>You finished #26 and kept your spot in the Hydrogen League</p>
            <Button variant="outline" fullWidth>Continue</Button>
        </div>
    </Card>
);

export default ComebackCard;
