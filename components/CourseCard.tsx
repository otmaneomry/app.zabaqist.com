import React from "react";
import {Card} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
    title: string;
    icon: string;
    level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({title, icon, level}) => (
    <Card padding="md" style={{overflow: 'hidden', backgroundColor: '#f3f4f6'}}>
        <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`} title={title} style={{textDecoration: 'none', color: 'inherit'}}>
            <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                <Image src={icon} alt={title} width={64} height={64}/>
            </div>
            <p style={{fontSize: '0.75rem', fontWeight: 600, color: '#2CB0A1', marginBottom: '0.25rem', textAlign: 'center'}}>{level}</p>
            <h3 style={{fontWeight: 'bold', fontSize: '0.875rem', textAlign: 'center'}}>{title}</h3>
        </Link>
    </Card>
);

export default CourseCard;
