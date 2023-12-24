import React, { useContext, useState } from 'react';
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import Drawer from 'react-modern-drawer'
import { RxHamburgerMenu } from "react-icons/rx";

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const DashboardLayout = () => {
    const { user, OUT } = useContext(AuthContext)
    console.log(user?.displayName)

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (

        <>
            <div className='lg:flex hidden text-black min-h-screen '>
                <div className='lg:w-[22%]  fixed top-0 h-full w-full lg:block hidden border-r-[5px] border-[#3e3857]'>
                    <div className='flex justify-start items-center gap-4 mt-[40px] px-[40px]'>
                        <img src={user?.photoURL} className='rounded-full h-[60px] w-[60px]' alt="" />
                        <div>
                            <p className='xl:text-xl text-lg font-semibold'>{user?.displayName}</p>
                            <p className=''>{user?.email}</p>
                        </div>

                    </div>

                    <div className='px-[20px] mt-16'>
                        <button className='flex p-[20px] w-full rounded-xl  bg-[#272A30] text-white border-[#272A30] border  gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
                        <div className="divider divide  ">OR</div>
                        <Link to={'/'}>
                            <button className='flex p-[20px] w-full rounded-xl hover:text-white border-[#272A30] hover:bg-[#282931] border  gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
                        </Link>
                        <button onClick={()=>OUT(OUT)} className='flex items-center gap-2 btn btn-sm mt-5 bg-lime-500'><FaSignOutAlt/> Logout</button>
                    </div>
                </div>
                <div className='lg:w-[78%] ml-auto w-full  '>
                    <Outlet></Outlet>
                </div>

            </div>

            {/* Mobile Dashboard */}

            <div className='flex flex-col lg:hidden'>

                <div className="navbar bg-[#ffffff] h-[68px]   border-b-[5px] border-[#3e3857]">
                    <div onClick={toggleDrawer} className='text-2xl   hover:bg-[#292731] py-3 px-4 rounded-lg'>
                        {
                            isOpen ? '' : <RxHamburgerMenu />
                        }
                    </div>
                </div>


                <div className='min-h-[calc(100vh-68px)] bg-[#ffffff]'>
                    <Outlet></Outlet>
                </div>




            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'

                style={{
                    backgroundColor: '#161420',

                }}
                className='bg-[#161420] border-l-4 border-[#3e3857]'
            >
                <div className='flex justify-start items-center gap-4 mt-[40px] px-[40px]'>
                    <img src={user?.photoURL} className='rounded-full w-[50px]' alt="" />
                    <div>
                        <p className=' font-semibold'>{user?.displayName}</p>
                        <p className='text-sm '>{user?.email}</p>
                    </div>
                </div>

                <div className='px-[20px] mt-16'>
                    <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] border gap-3 text-lg font-medium'> <img src="/images/dashBoardIcon.svg" alt="" />Dashboard</button>
                    <hr className='pt-7 mt-7'></hr>
                    <Link to={'/'}>
                        <button className='flex p-[20px] w-full rounded-xl  border-[#272A30] hover:bg-[#282931] border  gap-3 text-lg font-medium'> <FaHome className="text-3xl"></FaHome>  Home </button>
                    </Link>
                    <button onClick={toggleDrawer}>Show</button>

                </div>
            </Drawer>
        </>

    );
};

export default DashboardLayout;