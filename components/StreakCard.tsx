import React from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";

const StreakCard = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="bg-red flex justify-center items-center">
                        <h2 className="text-4xl font-bold mr-2">0</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                        </svg>
                    </div>
                    <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>
                </div>
                <p className="mb-4">Solve <strong>3 problems</strong> to start a streak</p>
                <div className="flex justify-between mb-4">
                    {['Su', 'M', 'T', 'W', 'Th'].map((day, index) => (
                        <div  key={index}  className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                                </svg>
                            </div>
                            <p className="text-sm">{day}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="border border-t-1">
                <div className="w-full flex justify-between text-sm pt-3">
                    <div>
                        <p className="font-bold">3</p>
                        <p>Longest streak</p>
                    </div>
                    <div>
                        <p className="font-bold">33</p>
                        <p>Lessons completed</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default StreakCard;