import React from 'react';
import Container from '../../Shared/Container';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-[#161420] flex justify-center pb-20'>
                <Container>
                    <h2 className='lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-extrabold  text-center max-w-[900px] mb-[20px] lg:mt-[120px] md:mt-[70px] mt-[50px]  text-white'>Free Task Management Software <br /> without any limits</h2>
                    <p className='text-gray-400 md:text-lg sm:text-base text-sm max-w-[750px] px-5 text-center flex justify-center mb-[20px]'>Manage projects and tasks, collaborate with teammates, and status reports at a glance with just one click</p>
                    <div className='flex justify-center'>

                        <Link to={'/dashboard/dash'} className="bg-gradient-to-r flex items-center gap-2  hover:from-teal-700 hover:to-blue-600 from-teal-600 to-blue-500 text-white font-semibold py-2 px-6 lg:text-xl text-lg mb-4 rounded-md shadow-md hover:shadow-lg">
                            Let’s Explore< FaArrowCircleRight className='bg-none border rounded-full' />
                        </Link>

                    </div>
                    <p className='text-gray-400 text-center md:text-base text-sm'>Unlimited Users . Unlimited Task . Free Forever</p>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
