
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userProfile, setUserProfile, OUT } = useContext(AuthContext)

  const [navItem, setNavItem] = useState(false)

  useEffect(() => {
    setNavItem(false)
    setUserProfile(false)
  }, [setUserProfile])
  const handleLogOut = () => {
    OUT()
      .then()
      .catch()
    Swal.fire({
      title: "See you soon",
      text: "Successfully Logout!",
      icon: "success"
    });
    setNavItem(false)
  }
  const link = <>
    <NavLink to={'/'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-1 pb-[2px] '>Home</NavLink>
    <NavLink to={'/dashboard/dash'} className='border-b-[2px] hover:border-b-[2px] hover:border-[#3AA39F] px-1 pb-[2px] '>Dashboard</NavLink>

  </>
  return (
    <div className="bg-[#cfc5f7] text-white">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown relative">
              <div onClick={() => { setNavItem(!navItem) }} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              {
                navItem && <ul tabIndex={0} className="menu menuItemLInk space-y-3 flex flex-col lg:hidden py-3  text-black menu-sm absolute  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {link}
                </ul>
              }

            </div>
            <div className="flex items-center gap-1">
              {/* <img className="w-[35px]" src="/logo.png" alt="" />   */}
              <h2 className="text-xl font-semibold">Task<span className="text-yellow-500">Manage</span></h2>
            </div>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-5 menuItemLInk px-1">
              {link}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? <>
                <div className="dropdown dropdown-end relative  text-black">
                  <div onClick={() => { setUserProfile(!userProfile) }} tabIndex={0} role="button" className="btn btn-ghost  avatar bg-gradient-to-r p-[2px] rounded-full hover:from-teal-700 hover:to-blue-600 from-teal-600 to-blue-500">
                    <div className="w-[40px] rounded-full">
                      <img alt="Profile Picture" className="bg-white" src={user?.photoURL} />
                    </div>
                  </div>
                  {
                    userProfile ? <ul tabIndex={0} className="mt-2 z-[1] p-2 shadow  -left-40 menu menu-sm rounded-none absolute  bg-[#cfc5f7] h-52 w-52">
                      <li>
                        <a className="justify-between">
                          {user?.displayName}

                        </a>
                      </li>
                      <li onClick={() => { handleLogOut() }}><a>Logout</a></li>
                    </ul> : ''
                  }

                </div>
              </> : <Link to={'/login'}>
                <button className="bg-gradient-to-r hover:from-teal-700 hover:to-blue-600 from-teal-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg">
                  Join Now
                </button>
              </Link>
            }



          </div>
        </div>
      </Container>

    </div>
  );
};

export default Navbar;