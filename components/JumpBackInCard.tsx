import React from 'react';
import {Card, Button} from "@mantine/core";
import Image from "next/image";

const JumpBackInCard = () => {
    return (
        <Card padding="lg">
            <div style={{borderRadius: '0.5rem', padding: '1rem'}}>
                <div style={{position: 'relative', width: '100%', height: '10rem', marginBottom: '1rem'}}>
                    <Image
                        src="/brilliant-image/foundational-math.png"
                        alt="Analyse mathématique illustration"
                        fill
                        style={{objectFit: 'contain'}}
                        className="rounded"
                    />
                </div>
                <p style={{fontSize: '0.875rem', color: '#2CB0A1', marginBottom: '0.5rem'}}>MATHÉMATIQUES · BAC</p>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem'}}>Fonctions Logarithmiques</h3>
                <Button fullWidth color="teal">Continuer</Button>
            </div>
        </Card>
    );
};

export default JumpBackInCard;
