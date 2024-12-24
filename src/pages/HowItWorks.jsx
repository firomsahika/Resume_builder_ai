import React, { useState } from 'react';
import { Pencil, MousePointer2, CheckCheck, CornerDownRight } from 'lucide-react';

const HowItWorks = () => {
    const [activeSection, setActiveSection] = useState('coverLetter');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'coverLetter':
                return (
                    <div className="flex gap-x-10 items-center justify-center">
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <Pencil size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">Fill your info</p>
                        </div>
                        <CornerDownRight size={60} />
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <MousePointer2 size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">Select template</p>
                        </div>
                        <CornerDownRight size={60} />
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <CheckCheck size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">ATS Friendly Cover Letter</p>
                        </div>
                    </div>
                );
            case 'resume':
                return (
                    <div className="flex gap-x-10 items-center justify-center">
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <Pencil size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">Fill your info</p>
                        </div>
                        <CornerDownRight size={60} />
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <MousePointer2 size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">Select template</p>
                        </div>
                        <CornerDownRight size={60} />
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <CheckCheck size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">ATS Friendly Cover Letter</p>
                        </div>
                    </div>
                );
            case 'interviewPrep':
                return (
                    <div className="flex gap-x-10 items-center justify-center">
                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <Pencil size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">Fill your info</p>
                        </div>
                        <CornerDownRight size={60} />


                        <div className="flex flex-col gap-y-4">
                            <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center">
                                <CheckCheck size={60} className="text-slate-100" />
                            </div>
                            <p className="text-xl text-slate-200">Interview Flashcards</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex bg-[#09abe7] text-slate-100 h-screen flex-col items-center justify-center gap-y-10 flex-grow">
            <div>
                <p className="text-6xl font-semibold">How It Works</p>
            </div>
            <div className="flex gap-x-10">
                <button
                    className={`text-xl px-5 py-3 rounded-full ${activeSection === 'coverLetter' ? 'bg-slate-100 text-black' : 'border text-black'
                        }`}
                    onClick={() => handleSectionChange('coverLetter')}
                >
                    Cover letter
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
            {/* Render dynamic content */}
            {renderContent()}
        </div>
    );
};

export default HowItWorks;
