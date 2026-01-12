import React from 'react';

interface SubjectIconProps {
    subject: string;
}

const SubjectIcon: React.FC<SubjectIconProps> = ({ subject }) => {
    const iconContent: { [key: string]: React.ReactElement } = {
        'Math': (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath=":r1:">
                    <path
                        d="M5.19922 12.2334L12.3992 7.5834L18.6992 9.9834H20.4992L26.6492 5.4834"
                        stroke="black" strokeWidth="1.06667"></path>
                    <rect x="2.19922" y="19.7334" width="6" height="9.6"
                          fill="#FF8D23"></rect>
                    <rect x="9.40039" y="14.6338" width="6" height="14.7"
                          fill="#FF8D23"></rect>
                    <rect x="23.8008" y="11.9336" width="6" height="17.4"
                          fill="#FF8D23"></rect>
                    <rect x="16.5996" y="17.9336" width="6" height="11.4"
                          fill="#FF8D23"></rect>
                    <circle cx="5.19961" cy="12.2338" r="2.1" fill="black"></circle>
                    <circle cx="12.4008" cy="7.73379" r="2.1" fill="black"></circle>
                    <circle cx="19.6" cy="10.1332" r="2.1" fill="black"></circle>
                    <circle cx="26.5004" cy="5.6332" r="2.1" fill="black"></circle>
                </g>
                <defs>
                    <clipPath id=":r1:">
                        <rect width="28.8" height="28.8" fill="white"
                              transform="translate(1.59961 0.533203)"></rect>
                    </clipPath>
                </defs>
            </svg>
        ),
        'Data Analysis': (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14h4v6H4v-6zM10 10h4v10h-4V10zM16 6h4v14h-4V6z" fill="#FF8D23"/>
                <path d="M4 14h4v6H4v-6zM10 10h4v10h-4V10zM16 6h4v14h-4V6z" stroke="currentColor" strokeWidth="1"/>
            </svg>
        ),
        'Computer Science': (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath=":r1:">
                    <path
                        d="M5.19922 12.2334L12.3992 7.5834L18.6992 9.9834H20.4992L26.6492 5.4834"
                        stroke="black" strokeWidth="1.06667"></path>
                    <rect x="2.19922" y="19.7334" width="6" height="9.6"
                          fill="#FF8D23"></rect>
                    <rect x="9.40039" y="14.6338" width="6" height="14.7"
                          fill="#FF8D23"></rect>
                    <rect x="23.8008" y="11.9336" width="6" height="17.4"
                          fill="#FF8D23"></rect>
                    <rect x="16.5996" y="17.9336" width="6" height="11.4"
                          fill="#FF8D23"></rect>
                    <circle cx="5.19961" cy="12.2338" r="2.1" fill="black"></circle>
                    <circle cx="12.4008" cy="7.73379" r="2.1" fill="black"></circle>
                    <circle cx="19.6" cy="10.1332" r="2.1" fill="black"></circle>
                    <circle cx="26.5004" cy="5.6332" r="2.1" fill="black"></circle>
                </g>
                <defs>
                    <clipPath id=":r1:">
                        <rect width="28.8" height="28.8" fill="white"
                              transform="translate(1.59961 0.533203)"></rect>
                    </clipPath>
                </defs>
            </svg>
        ),
        'Programming & AI': (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14h4v6H4v-6zM10 10h4v10h-4V10zM16 6h4v14h-4V6z" fill="#FF8D23"/>
                <path d="M4 14h4v6H4v-6zM10 10h4v10h-4V10zM16 6h4v14h-4V6z" stroke="currentColor" strokeWidth="1"/>
            </svg>
        ),
        'Science & Engineering': (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath=":r1:">
                    <path
                        d="M5.19922 12.2334L12.3992 7.5834L18.6992 9.9834H20.4992L26.6492 5.4834"
                        stroke="black" strokeWidth="1.06667"></path>
                    <rect x="2.19922" y="19.7334" width="6" height="9.6"
                          fill="#FF8D23"></rect>
                    <rect x="9.40039" y="14.6338" width="6" height="14.7"
                          fill="#FF8D23"></rect>
                    <rect x="23.8008" y="11.9336" width="6" height="17.4"
                          fill="#FF8D23"></rect>
                    <rect x="16.5996" y="17.9336" width="6" height="11.4"
                          fill="#FF8D23"></rect>
                    <circle cx="5.19961" cy="12.2338" r="2.1" fill="black"></circle>
                    <circle cx="12.4008" cy="7.73379" r="2.1" fill="black"></circle>
                    <circle cx="19.6" cy="10.1332" r="2.1" fill="black"></circle>
                    <circle cx="26.5004" cy="5.6332" r="2.1" fill="black"></circle>
                </g>
                <defs>
                    <clipPath id=":r1:">
                        <rect width="28.8" height="28.8" fill="white"
                              transform="translate(1.59961 0.533203)"></rect>
                    </clipPath>
                </defs>
            </svg>
)
}
    ;

    return (
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                {iconContent[subject] || <div>No icon</div>}
            </div>
            <p className="text-sm">{subject}</p>
        </div>
    );
};

export default SubjectIcon;