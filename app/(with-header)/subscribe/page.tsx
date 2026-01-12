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
                        backgroundColor: selectedPlan === 'annual' ? '#facc15' : undefined,
                        color: selectedPlan === 'annual' ? 'black' : undefined,
                    }}
                >
                    Annual
                    {selectedPlan === 'annual' && <span style={{marginLeft: '0.5rem', fontSize: '0.75rem', backgroundColor: '#eab308', padding: '0 0.25rem', borderRadius: '0.25rem'}}>MOST POPULAR</span>}
                </Button>
                <Button
                    variant={selectedPlan === 'monthly' ? 'filled' : 'outline'}
                    onClick={() => setSelectedPlan('monthly')}
                    style={{width: '50%', marginLeft: '0.5rem'}}
                >
                    Monthly
                </Button>
            </div>
            {selectedPlan === 'annual' && (
                <div style={{textAlign: 'center', marginBottom: '1rem'}}>
                    <p style={{fontSize: '0.875rem', textDecoration: 'line-through'}}>MAD 53.59</p>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>MAD 42.87<span style={{fontSize: '0.875rem'}}>/month*</span></p>
                </div>
            )}
            {selectedPlan === 'monthly' && (
                <div style={{textAlign: 'center', marginBottom: '1rem'}}>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>MAD 107.55<span style={{fontSize: '0.875rem'}}>/month</span></p>
                </div>
            )}
            <Button style={{width: '100%', backgroundColor: '#22c55e', color: 'white'}} styles={{root: {':hover': {backgroundColor: '#16a34a'}}}}>Subscribe now</Button>
            <p style={{fontSize: '0.75rem', marginTop: '1rem', color: '#6b7280'}}>*Billed as one payment. Renews annually, cancel anytime. You can turn off auto-renew from your settings.</p>
        </div>
    </Card>
);

const ReviewSection = () => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '3rem 0'}}>
        <div style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'serif', fontStyle: 'italic'}}>{`"Tantalizing"`}</p>
            <p style={{fontSize: '0.75rem'}}>The New York Times</p>
        </div>
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'flex'}}>
                {[...Array(5)].map((_, i) => (
                    <span key={i} style={{color: '#facc15'}}>★</span>
                ))}
            </div>
            <p style={{fontSize: '0.875rem'}}>Over 50,000 5-star reviews</p>
        </div>
        <div style={{textAlign: 'center'}}>
            <Image src="/trustpilot.png" alt="Trustpilot" width={100} height={30}/>
        </div>
        <div style={{textAlign: 'center'}}>
            <p style={{fontFamily: 'serif', fontStyle: 'italic'}}>{`"Advanced"`}</p>
            <p style={{fontSize: '0.75rem'}}>The Atlantic</p>
        </div>
    </div>
);

const LevelUpSection = () => (
    <div style={{margin: '3rem 0'}}>
        <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Level up with Premium</h2>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ul style={{width: '33.333%', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <li>🚀 Learn efficiently</li>
                <li>📚 Master the essentials</li>
                <li>🧠 Apply your learnings</li>
                <li>📊 Stay on track</li>
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
                <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Effective, hands-on learning</h3>
                <p>Unlimited access to 70+ interactive courses with real-time feedback and simple explanations to make
                    learning efficient.</p>
            </div>
        </div>
    </div>
);

const CoursesSection = () => {
    const [activeTab, setActiveTab] = useState('Math');
    const tabs = ['Math', 'Data Analysis', 'CS & Programming', 'Science', 'Electives'];
    const courses = [
        "Scientific Thinking", "The Chemical Reaction", "Physics of the Everyday",
        "Quantum Mechanics", "Special Relativity", "Quantum Computing",
        "Computational Biology", "Knowledge and Uncertainty", "Classical Mechanics",
        "Electricity and Magnetism"
    ];

    return (
        <div style={{margin: '3rem 0'}}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Build quantitative + technical problem solving
                skills</h2>
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
                    <h3 style={{fontWeight: 'bold', marginBottom: '1rem'}}>Courses in {activeTab}</h3>
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
            name: "Guided courses",
            free: true,
            premium: true,
            description: "In math, science, programming, data analysis, and more"
        },
        {
            name: "Bonus math, science, & CS puzzles",
            free: true,
            premium: true,
            description: "Hundreds of additional bite-sized challenges"
        },
        {name: "No limits", free: false, premium: true, description: "Access our full library of content"},
        {
            name: "Fully unlocked learning paths",
            free: false,
            premium: true,
            description: "Step-by-step pathways to develop your problem solving skills in math, science, data, and programming"
        },
    ];

    return (
        <div style={{margin: '3rem 0'}}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem'}}>No commitment, cancel anytime</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem'}}>Unlock it all with Premium</p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem'}}>
                <div></div>
                <div style={{fontWeight: 'bold', textAlign: 'center'}}>Free</div>
                <div style={{fontWeight: 'bold', textAlign: 'center'}}>Premium</div>
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <div>{feature.name}<p style={{fontSize: '0.875rem', color: '#6b7280'}}>{feature.description}</p></div>
                        <div style={{textAlign: 'center'}}>{feature.free ? <IconCircleCheck style={{display: 'inline', color: '#22c55e'}} /> :
                            <IconX style={{display: 'inline', color: '#ef4444'}} />}</div>
                        <div style={{textAlign: 'center'}}><IconCircleCheck style={{display: 'inline', color: '#22c55e'}} /></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const SuperchargeSection = () => (
    <div style={{margin: '3rem 0', textAlign: 'center', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem'}}>Supercharge your learning</h2>
            <ul style={{display: 'inline-block', textAlign: 'left', marginBottom: '2rem'}}>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>📚</span> 70+ courses in math, programming, data analysis, computer science,
                    and
                    more
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>🚫</span> No in-app purchases or ads
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>🆕</span> New content added regularly
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{marginRight: '0.5rem'}}>📱</span> One subscription across all devices
                </li>
            </ul>
            <Button style={{backgroundColor: '#22c55e', color: 'white'}} styles={{root: {':hover': {backgroundColor: '#16a34a'}}}}>Subscribe now</Button>
        </div>

        <Image src={"/brilliant-image/suppercharging.png"} alt={"Gift plan"} width={512} height={512} style={{width: '50%', display: 'flex'}}/>
    </div>
);

const GiftSection = () => (
    <div style={{margin: '3rem 0'}}>
        <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Share the gift of Premium</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
            <Card style={{width: '50%'}}>
                <div style={{padding: '1.5rem'}}>
                    <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image src={"https://brilliant.org/images/paywall/brandRefresh/gift-plan.svg"} alt={"Gift plan"}
                               width={128} height={128}/>
                        <div style={{paddingLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <h3 style={{fontWeight: 'bold'}}>Gift plan</h3>
                            <p style={{marginTop: '1rem'}}>Share your love of math and science — give a subscription to Brilliant
                                Premium.</p>
                            <Button variant="outline"
                                    style={{marginTop: '2rem', width: '100%', borderWidth: '2px', borderRadius: '1rem'}}
                                    styles={{root: {':hover': {borderColor: '#030712', backgroundColor: '#f9fafb'}}}}>Gift
                                Premium</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card style={{width: '50%'}}>
                <div style={{padding: '1.5rem'}}>
                    <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image src={"https://brilliant.org/images/paywall/brandRefresh/group-plan.svg"}
                               alt={"Group plan"}
                               width={128} height={128}/>
                        <div style={{paddingLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
                            <h3 style={{fontWeight: 'bold'}}>Group plan</h3>
                            <p style={{marginTop: '1rem'}}>Want to share Brilliant Premium with your family, class, or team? Learn
                                about our group plans.</p>
                            <Button variant="outline"
                                    style={{marginTop: '2rem', width: '100%', borderWidth: '2px', borderRadius: '1rem'}}
                                    styles={{root: {':hover': {borderColor: '#030712', backgroundColor: '#f9fafb'}}}}>Learn
                                more</Button>
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
            <div style={{background: 'linear-gradient(to right, #1e40af, #4338ca)', width: '100%'}}>
                <div style={{maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem', color: 'white', textAlign: 'center'}}>
                    <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '2rem'}}>Unlock the full learning experience</h1>
                    <p style={{marginTop: '1rem'}}>Reach your learning goals fast with unlimited access to all courses</p>
                    <p style={{margin: '2rem 0'}}>⚡ Youtube Sponsor discount applied</p>
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
