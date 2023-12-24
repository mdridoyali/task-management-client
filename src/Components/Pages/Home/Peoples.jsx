import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
const Peoples = () => {
    return (
            <div className="py-16 bg-white">
                <h1 className="text-2xl md:text-3xl uppercase text-center font-bold">What type of people are <br /> using Task<span className="text-yellow-600">Forge</span> ?</h1>
                <div className="mt-10">
                    <div className="max-w-6xl mx-auto font-[sans-serif] text-[#333]">
                        <div className="grid lg:grid-cols-3 px-5 md:grid-cols-2 gap-12">
                            <div className="p-4 text-center border">
                                <FaLaptopCode className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Developers</h3>
                                <p className="text-gray-500 text-sm">TaskForge help developers organize their projects by breaking them down into manageable tasks. This ensures that each aspect of a project is clearly defined and progress can be tracked effectively.</p>
                            </div>
                            <div className="p-4 text-center border">
                                <RiBankCardFill className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Bankers</h3>
                                <p className="text-gray-500 text-sm">Bankers often have multiple responsibilities and tasks to juggle, from client meetings to financial analysis. TaskForge help them prioritize tasks, set deadlines, and allocate time effectively.</p>
                            </div>
                            <div className="p-4 text-center border">
                                <GrUserManager className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Corporate Professionals</h3>
                                <p className="text-gray-500 text-sm">Many corporate roles involve project-based work. TaskForge provide features for project planning, task assignment, progress tracking, and collaboration, facilitating effective project management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Peoples;