'use client';

import React from 'react';
import {Card, Button} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const JumpBackInCard = () => {
    return (
        <Card
            padding="lg"
            radius="lg"
            withBorder
            style={{
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
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
                <p style={{
                    fontSize: '0.875rem',
                    color: '#2CB0A1',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                }}>MATHÉMATIQUES · BAC</p>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#1f2937'
                }}>Fonctions Logarithmiques</h3>
                <Link href="/quiz/1" style={{textDecoration: 'none'}}>
                    <Button
                        fullWidth
                        color="teal"
                        style={{
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Commencer le quiz
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default JumpBackInCard;
