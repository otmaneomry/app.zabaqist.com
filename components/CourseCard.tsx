'use client';

import React from "react";
import {Card} from "@mantine/core";
import {Link} from '@/i18n/navigation'
import Image from "next/image";

interface CourseCardProps {
    title: string;
    icon: string;
    level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({title, icon, level}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Card
            padding="md"
            radius="lg"
            withBorder
            style={{
                overflow: 'hidden',
                backgroundColor: '#f3f4f6',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`} title={title} style={{textDecoration: 'none', color: 'inherit'}}>
                <div style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}>
                    <Image src={icon} alt={title} width={64} height={64}/>
                </div>
                <p style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#2CB0A1',
                    marginBottom: '0.25rem',
                    textAlign: 'center',
                    letterSpacing: '0.05em'
                }}>{level}</p>
                <h3 style={{
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    color: '#1f2937'
                }}>{title}</h3>
            </Link>
        </Card>
    );
};

export default CourseCard;
