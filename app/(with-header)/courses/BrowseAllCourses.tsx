import React from 'react';
import Image from 'next/image';
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

const BrowseAllCourses = () => {
    const categories = ['Toutes', 'Algèbre', 'Analyse', 'Géométrie', 'Probabilités'];
    const courses = [
        { title: 'Fonctions Logarithmiques', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Dérivées et Primitives', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Nombres Complexes', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Suites Numériques', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Géométrie dans l\'Espace', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Probabilités Continues', icon: '/brilliant-image/foundational-math.png' },
    ];

    return (
        <section>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem'}}>Toutes les thématiques</h2>

            <div style={{position: 'relative', marginBottom: '2rem'}}>
                <TextInput
                    placeholder="Rechercher une thématique..."
                    leftSection={<IconSearch size={20} style={{color: '#9ca3af'}} />}
                    styles={{
                        input: {
                            paddingLeft: '2.5rem',
                        }
                    }}
                />
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem'}}>
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        variant={index === 0 ? "filled" : "outline"}
                        radius="xl"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>Thématiques populaires</h3>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}} className="md:grid-cols-3 lg:grid-cols-6">
                {courses.map((course, index) => (
                    <div key={index} style={{backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', padding: '1rem', textAlign: 'center'}}>
                        <div style={{position: 'relative', height: '6rem', marginBottom: '0.5rem'}}>
                            <Image src={course.icon} alt={course.title} fill style={{objectFit: 'contain'}} />
                        </div>
                        <div style={{backgroundColor: '#2CB0A1', color: 'white', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.5rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.5rem'}}>BAC</div>
                        <div style={{fontSize: '0.875rem', fontWeight: 600}}>{course.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrowseAllCourses;
