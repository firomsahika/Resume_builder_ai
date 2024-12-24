import React, { useState } from 'react';
import { Pencil, MousePointer2, CheckCheck, CornerDownRight, ChevronsDown } from 'lucide-react';
import black from "../../public/Black Charcoal Modern Minimalist Cover Letter-1.png";
import blue from "../../public/Cover Letter Doc in Blue White Clean Style-1.png";
import white from "../../public/Green and White Minimalist Graphic Design Agency Cover Letter.png";

const HowItWorks = () => {
    const [activeSection, setActiveSection] = useState('coverLetter');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'coverLetter':
                return (
                    <div className="flex flex-col gap-y-5 px-20 items-center">
                        <p className="text-4xl font-semibold py-8 flex items-center justify-center">
                            Choose from templates <ChevronsDown size={40} className="text-black" />
                        </p>
                        <div className="flex gap-x-10">
                            {[
                                { src: white, alt: "White Template" },
                                { src: blue, alt: "Blue Template" },
                                { src: black, alt: "Black Template" },
                            ].map((template, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={template.src}
                                        alt={template.alt}
                                        className="w-80 rounded-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <button
                                        className="absolute bg-black inset-0 flex items-center justify-center  bg-opacity-60 opacity-0 text-white font-bold rounded-md group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => console.log(`Selected ${template.alt}`)}
                                    >
                                        Select Template
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'resume':
                return (
                    <div className="flex flex-col gap-y-5 px-20 items-center">
                        <p className="text-4xl font-semibold py-8 flex items-center justify-center">
                            Choose from resume templates <ChevronsDown size={40} className="text-black" />
                        </p>
                        <div className="flex gap-x-10">
                            {[
                                { src: white, alt: "Professional Resume Template" },
                                { src: blue, alt: "Creative Resume Template" },
                                { src: black, alt: "Minimalist Resume Template" },
                            ].map((template, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={template.src}
                                        alt={template.alt}
                                        className="w-80 rounded-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <button
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 text-white font-semibold rounded-md group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => console.log(`Selected ${template.alt}`)}
                                    >
                                        Select Template
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'interviewPrep':
                return (
                    <div className="flex flex-col gap-y-5 px-20 items-center">
                        <p className="text-4xl font-semibold py-8 flex items-center justify-center">
                            Choose interview prep flashcards <ChevronsDown size={40} className="text-black" />
                        </p>
                        <div className="flex gap-x-10">
                            {[
                                { src: white, alt: "Technical Questions Flashcard" },
                                { src: blue, alt: "Behavioral Questions Flashcard" },
                                { src: black, alt: "General Interview Tips Flashcard" },
                            ].map((flashcard, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={flashcard.src}
                                        alt={flashcard.alt}
                                        className="w-80 rounded-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <button
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 text-white font-semibold rounded-md group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => console.log(`Selected ${flashcard.alt}`)}
                                    >
                                        Select Flashcard
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex bg-[#09abe7] text-slate-100 min-h-screen flex-col items-center justify-center gap-y-10 flex-grow py-16">
            <div>
                <p className="text-6xl font-semibold">How It Works</p>
            </div>
            <div className="flex gap-x-10">
                <button
                    className={`text-xl px-5 py-3 rounded-full ${activeSection === 'coverLetter' ? 'bg-slate-100 text-black' : 'border text-black'
                        }`}
                    onClick={() => handleSectionChange('coverLetter')}
                >
                    Cover Letter
                </button>
                <button
                    className={`text-xl px-5 py-3 rounded-full ${activeSection === 'resume' ? 'bg-slate-100 text-black' : 'border text-black'
                        }`}
                    onClick={() => handleSectionChange('resume')}
                >
                    Resume
                </button>
                <button
                    className={`text-xl px-5 py-3 rounded-full ${activeSection === 'interviewPrep' ? 'bg-slate-100 text-black' : 'border text-black'
                        }`}
                    onClick={() => handleSectionChange('interviewPrep')}
                >
                    Interview Prep
                </button>
            </div>
            {renderContent()}
        </div>
    );
};

export default HowItWorks;
