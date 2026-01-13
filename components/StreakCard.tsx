import React from 'react';
import {Card} from "@mantine/core";

const StreakCard = () => {
    return (
        <Card padding="lg" radius="lg" withBorder>
            <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', marginRight: '0.5rem'}}>0</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" style={{width: '2rem', height: '2rem'}}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                        </svg>
                    </div>
                    <button style={{color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>
                </div>
                <p style={{marginBottom: '1rem'}}>Solve <strong>3 problems</strong> to start a streak</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                    {['Su', 'M', 'T', 'W', 'Th'].map((day, index) => (
                        <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div style={{
                                width: '3rem',
                                height: '3rem',
                                backgroundColor: '#e5e7eb',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '0.5rem'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" style={{width: '1.5rem', height: '1.5rem'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                                </svg>
                            </div>
                            <p style={{fontSize: '0.875rem'}}>{day}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{borderTop: '1px solid #e5e7eb', paddingTop: '0.75rem'}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem'}}>
                    <div>
                        <p style={{fontWeight: 'bold'}}>3</p>
                        <p>Longest streak</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 'bold'}}>33</p>
                        <p>Lessons completed</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default StreakCard;
