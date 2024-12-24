import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";

const Navbar = () => {

    // Store the state for each dropdown in an object
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }

    return (
        <div className="fixed z-10  bg-[#f4f4f9] h-20 w-full px-20 flex items-center justify-between">

            <div className="text-xl font-bold text-gray-800">
                <p>Talent.ai</p>
            </div>

            <div className="hidden md:flex space-x-14 text-gray-600">
                <ul className="flex font-semibold space-x-12 gap-x-10">

                    {/* Cover Letter Dropdown */}
                    <div className="relative">
                        <li
                            className="flex items-center justify-center hover:text-gray-900 gap-x-2 cursor-pointer"
                            onClick={() => handleDropdownToggle('coverLetter')}
                        >
                            Cover Letter <ChevronDown size={16} />
                        </li>
                        {openDropdown === 'coverLetter' && (
                            <div className="absolute flex items-center justify-center right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                                <ul className="py-2 p-5 text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b rounded-md">
                                        Tailored Cover Letter
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b rounded-md">
                                        Cover Letter Generator
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Resume Dropdown */}
                    <div className="relative">
                        <li
                            className="flex items-center justify-center hover:text-gray-900 gap-x-2 cursor-pointer"
                            onClick={() => handleDropdownToggle('resume')}
                        >
                            Resume <ChevronDown size={16} />
                        </li>
                        {openDropdown === 'resume' && (
                            <div className="absolute flex items-center justify-center right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                                <ul className="py-2 text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b rounded-md">
                                        Resume analysis
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b rounded-md">
                                        Resume Generator
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Interview Dropdown */}
                    <div className="relative">
                        <li
                            className="flex items-center justify-center hover:text-gray-900 gap-x-2 cursor-pointer"
                            onClick={() => handleDropdownToggle('interview')}
                        >
                            Interview <ChevronDown size={16} />
                        </li>
                        {openDropdown === 'interview' && (
                            <div className="absolute flex items-center justify-center right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                                <ul className="py-2 text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b rounded-md">
                                        Interview Prep
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b rounded-md">
                                        Mock Interviews
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </ul>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="px-4 py-2 text-sm text-gray-800 border rounded-2xl hover:bg-gray-200">
                    Login
                </button>
                <button className="px-4 py-2 text-sm text-white bg-btn rounded-2xl hover:bg-blue-700">
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Navbar;
