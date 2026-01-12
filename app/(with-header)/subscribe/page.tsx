'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {Button, Card} from "@mantine/core";
import {IconCircleCheck, IconX} from '@tabler/icons-react';

type PlanType = 'annual' | 'monthly';

interface PricingCardProps {
    selectedPlan: PlanType;
    setSelectedPlan: React.Dispatch<React.SetStateAction<PlanType>>;
}

const PricingCard: React.FC<PricingCardProps> = ({ selectedPlan, setSelectedPlan }) => (
    <Card style={{maxWidth: '28rem', margin: '0 auto', backgroundColor: 'white'}}>
        <div style={{padding: '1.5rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <Button
                    variant={selectedPlan === 'annual' ? 'filled' : 'outline'}
                    onClick={() => setSelectedPlan('annual')}
                    style={{
                        width: '50%',
                        marginRight: '0.5rem',
                        backgroundColor: selectedPlan === 'annual' ? '#2CB0A1' : undefined,
                        color: selectedPlan === 'annual' ? 'white' : undefined,
                    }}
                >
                    Annuel
                    {selectedPlan === 'annual' && <span style={{marginLeft: '0.5rem', fontSize: '0.75rem', backgroundColor: '#26a092', padding: '0 0.25rem', borderRadius: '0.25rem'}}>POPULAIRE</span>}
                </Button>
                <Button
                    variant={selectedPlan === 'monthly' ? 'filled' : 'outline'}
                    onClick={() => setSelectedPlan('monthly')}
                    style={{width: '50%', marginLeft: '0.5rem'}}
                >
                    Mensuel
                </Button>
            </div>
            {selectedPlan === 'annual' && (
                <div style={{textAlign: 'center', marginBottom: '1rem'}}>
                    <p style={{fontSize: '0.875rem', textDecoration: 'line-through'}}>199 DH</p>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>149 DH<span style={{fontSize: '0.875rem'}}>/mois*</span></p>
                </div>
            )}
            {selectedPlan === 'monthly' && (
                <div style={{textAlign: 'center', marginBottom: '1rem'}}>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>299 DH<span style={{fontSize: '0.875rem'}}>/mois</span></p>
                </div>
            )}
            <Button style={{width: '100%', backgroundColor: '#2CB0A1', color: 'white'}} styles={{root: {':hover': {backgroundColor: '#26a092'}}}}>S'abonner maintenant</Button>
            <p style={{fontSize: '0.75rem', marginTop: '1rem', color: '#6b7280'}}>*Facturé en un seul paiement. Renouvellement annuel, annulation à tout moment. Vous pouvez désactiver le renouvellement automatique depuis vos paramètres.</p>
        </div>
    </Card>
);

const ReviewSection = () => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '3rem 0'}}>
        <div style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'serif', fontStyle: 'italic'}}>{`"Excellent"`}</p>
            <p style={{fontSize: '0.75rem'}}>Ministère de l'Éducation</p>
        </div>
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'flex'}}>
                {[...Array(5)].map((_, i) => (
                    <span key={i} style={{color: '#2CB0A1'}}>★</span>
                ))}
            </div>
            <p style={{fontSize: '0.875rem'}}>Plus de 10,000 avis 5 étoiles</p>
        </div>
        <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#2CB0A1'}}>Zabaqist</p>
            <p style={{fontSize: '0.75rem'}}>Maroc</p>
        </div>
        <div style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'serif', fontStyle: 'italic'}}>{`"Innovant"`}</p>
            <p style={{fontSize: '0.75rem'}}>Parents & Étudiants</p>
        </div>
    </div>
);

const LevelUpSection = () => (
    <div style={{margin: '3rem 0'}}>
        <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Passez au niveau supérieur avec Premium</h2>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ul style={{width: '33.333%', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <li>🚀 Apprentissage efficace</li>
                <li>📚 Maîtrisez l'essentiel</li>
                <li>🧠 Appliquez vos connaissances</li>
                <li>📊 Suivez vos progrès</li>
            </ul>
            <div style={{width: '33.333%', display: 'flex', justifyContent: 'center'}}>
                <section
                    style={{position: 'relative', width: '100%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                    <div
                        style={{position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '675px'}}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain'}}
                        >
                            <source
                                src="https://brilliant.org/videos/paywall/value-props/apply-your-learnings.mp4"
                                type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
            <div style={{width: '33.333%'}}>
                <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Apprentissage pratique et efficace</h3>
                <p>Accès illimité aux thématiques interactives du Baccalauréat avec retours en temps réel et explications simples pour un apprentissage efficace.</p>
            </div>
        </div>
    </div>
);

const CoursesSection = () => {
    const [activeTab, setActiveTab] = useState('Analyse');
    const tabs = ['Analyse', 'Algèbre', 'Géométrie', 'Probabilités', 'Statistiques'];
    const courses = [
        "Limites et Continuité", "Dérivées et Primitives", "Intégrales",
        "Fonctions Logarithmiques", "Fonctions Exponentielles", "Suites Numériques",
        "Équations Différentielles", "Développements Limités", "Calcul Intégral",
        "Études de Fonctions"
    ];

    return (
        <div style={{margin: '3rem 0'}}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Développez vos compétences en mathématiques</h2>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                {tabs.map(tab => (
                    <Button
                        key={tab}
                        variant={activeTab === tab ? 'filled' : 'outline'}
                        onClick={() => setActiveTab(tab)}
                        style={{margin: '0 0.25rem'}}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
                <div>
                    <h3 style={{fontWeight: 'bold', marginBottom: '1rem'}}>Thématiques en {activeTab}</h3>
                    <ul style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                        {courses.map((course, index) => (
                            <li key={index} style={{display: 'flex', alignItems: 'center'}}>
                                <span style={{marginRight: '0.5rem'}}>📚</span> {course}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Image src="/course-preview.png" alt="Course Preview" width={500} height={300}/>
                </div>
            </div>
        </div>
    );
};

const ComparisonSection = () => {
    const features = [
        {
            name: "Thématiques guidées",
            free: true,
            premium: true,
            description: "Algèbre, Analyse, Géométrie, Probabilités et plus"
        },
        {
            name: "Exercices bonus de mathématiques",
            free: true,
            premium: true,
            description: "Des centaines de défis supplémentaires"
        },
        {name: "Sans limites", free: false, premium: true, description: "Accès à toute notre bibliothèque de contenu"},
        {
            name: "Parcours d'apprentissage déverrouillés",
            free: false,
            premium: true,
            description: "Parcours étape par étape pour développer vos compétences en mathématiques du Baccalauréat"
        },
    ];

    return (
        <div style={{margin: '3rem 0'}}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem'}}>Sans engagement, annulez à tout moment</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem'}}>Débloquez tout avec Premium</p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem'}}>
                <div></div>
                <div style={{fontWeight: 'bold', textAlign: 'center'}}>Gratuit</div>
                <div style={{fontWeight: 'bold', textAlign: 'center'}}>Premium</div>
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <div>{feature.name}<p style={{fontSize: '0.875rem', color: '#6b7280'}}>{feature.description}</p></div>
                        <div style={{textAlign: 'center'}}>{feature.free ? <IconCircleCheck style={{display: 'inline', color: '#2CB0A1'}} /> :
                            <IconX style={{display: 'inline', color: '#ef4444'}} />}</div>
                        <div style={{textAlign: 'center'}}><IconCircleCheck style={{display: 'inline', color: '#2CB0A1'}} /></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const SuperchargeSection = () => (
    <div style={{margin: '3rem 0', textAlign: 'center', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem'}}>Boostez votre apprentissage</h2>
            <ul style={{display: 'inline-block', textAlign: 'left', marginBottom: '2rem'}}>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>📚</span> Toutes les thématiques du Baccalauréat Marocain en mathématiques
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>🚫</span> Pas d'achats intégrés ni de publicités
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>🆕</span> Nouveau contenu ajouté régulièrement
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>📱</span> Un abonnement sur tous vos appareils
                </li>
            </ul>
            <Button style={{backgroundColor: '#2CB0A1', color: 'white'}} styles={{root: {':hover': {backgroundColor: '#26a092'}}}}>S'abonner maintenant</Button>
        </div>

        <Image src={"/brilliant-image/suppercharging.png"} alt={"Gift plan"} width={512} height={512} style={{width: '50%', display: 'flex'}}/>
    </div>
);

const GiftSection = () => (
    <div style={{margin: '3rem 0'}}>
        <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Partagez le cadeau de Premium</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
            <Card style={{width: '50%'}}>
                <div style={{padding: '1.5rem'}}>
                    <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image src={"https://brilliant.org/images/paywall/brandRefresh/gift-plan.svg"} alt={"Offrir un abonnement"}
                               width={128} height={128}/>
                        <div style={{paddingLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <h3 style={{fontWeight: 'bold'}}>Offrir un abonnement</h3>
                            <p style={{marginTop: '1rem'}}>Partagez votre passion pour les mathématiques — offrez un abonnement Zabaqist Premium.</p>
                            <Button variant="outline"
                                    style={{marginTop: '2rem', width: '100%', borderWidth: '2px', borderRadius: '1rem', borderColor: '#2CB0A1'}}
                                    styles={{root: {':hover': {borderColor: '#26a092', backgroundColor: '#e6faf8'}}}}>Offrir
                                Premium</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card style={{width: '50%'}}>
                <div style={{padding: '1.5rem'}}>
                    <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image src={"https://brilliant.org/images/paywall/brandRefresh/group-plan.svg"}
                               alt={"Abonnement de groupe"}
                               width={128} height={128}/>
                        <div style={{paddingLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <h3 style={{fontWeight: 'bold'}}>Abonnement de groupe</h3>
                            <p style={{marginTop: '1rem'}}>Vous souhaitez partager Zabaqist Premium avec votre famille, classe ou équipe? Découvrez nos forfaits de groupe.</p>
                            <Button variant="outline"
                                    style={{marginTop: '2rem', width: '100%', borderWidth: '2px', borderRadius: '1rem', borderColor: '#2CB0A1'}}
                                    styles={{root: {':hover': {borderColor: '#26a092', backgroundColor: '#e6faf8'}}}}>En savoir
                                plus</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);

const SubscribePage = () => {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('annual');

    return (
        <div style={{minHeight: '100vh'}}>
            <div style={{background: 'linear-gradient(to right, #2CB0A1, #26a092)', width: '100%'}}>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem', color: 'white', textAlign: 'center'}}>
                    <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '2rem'}}>Déverrouillez l'expérience d'apprentissage complète</h1>
                    <p style={{marginTop: '1rem'}}>Atteignez vos objectifs rapidement avec un accès illimité à toutes les thématiques du Bac</p>
                    <p style={{margin: '2rem 0'}}>⚡ Offre spéciale pour étudiants marocains</p>
                    <PricingCard selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
                </div>
            </div>
            <div style={{backgroundColor: '#f3f4f6'}}>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem'}}>
                    <ReviewSection/>
                </div>
            </div>
            <div>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem'}}>
                    <LevelUpSection/>
                </div>
            </div>

            <div style={{backgroundColor: '#f3f4f6'}}>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem'}}>
                    <CoursesSection/>
                </div>
            </div>

            <div>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem'}}>
                    <ComparisonSection/>
                </div>
            </div>

            <div style={{backgroundColor: '#f3f4f6'}}>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem'}}>
                    <SuperchargeSection/>
                </div>
            </div>

            <div>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem'}}>
                    <GiftSection/>
                </div>
            </div>
        </div>
    );
};

export default SubscribePage;
