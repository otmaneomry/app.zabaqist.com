import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import RecommendedSection from "@/components/RecommendedSection";

interface CourseCardProps {
    title: string;
    icon: string;
    level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({title, icon, level}) => (
    <Card className="overflow-hidden bg-gray-100">
        <CardContent className="p-4 text-center">
            <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`} title={title}>
                <div className="mb-2 flex justify-center">
                    <Image src={icon} alt={title} width={64} height={64}/>
                </div>
                <p className="text-xs font-semibold text-purple-600 mb-1">{level}</p>
                <h3 className="font-bold text-sm">{title}</h3>
            </Link>
        </CardContent>
    </Card>
);

export default CourseCard;