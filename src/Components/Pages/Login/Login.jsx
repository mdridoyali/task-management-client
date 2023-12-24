import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {Google,In,GitHub} = useContext(AuthContext)
    const nav = useNavigate()
    const location = useLocation()
    // const AxiousPublic = UseAxious()
    const from = location?.state?.from?.pathname || '/'
    
    const handleSignIN = (e)=>{
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      In(email, password)
      .then((res) => {
         Swal.fire({
          title: "Your account have been created.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,
        });
        console.log(res.user);
        nav('/dashboard/dash');
        
      })
      .catch(err=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      })
    }

    const handleGoogle = ()=>{
      Google()
      .then(res => {
         Swal.fire({
          title: "Your account have been created.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,
        });
        nav('/dashboard/dash');
       
       })
      .catch(err=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      })
}


const handelGitHub = ()=>{
  GitHub()
  .then(res => {
   // const loggedUser = { email: res.user.email , name : res.user.displayName };
   // AxiousPublic.post("/users",  loggedUser )
   //  .then((res) => {
   //    console.log(res.data)
   //  })
   Swal.fire({
     title: "Your account have been created.",
     width: 600,
     padding: "3em",
     color: "#716add",
     background: "#fff url(/images/trees.png)",
     backdrop: `
             rgba(0,0,123,0.4)
             url("/images/nyan-cat.gif")
             left top
             no-repeat
           `,
   });
   nav('/dashboard/dash')
  
  })
  .catch(res => {
   Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Something went wrong",
   });
  })
}

    return (
        <div className='min-h-screen w-full sm:px-0 px-3 bg-[#161420] p-6  flex justify-center  items-center'>
        <div className='mx-auto  max-w-md  sm:min-w-[440px] bg-white shadow-2xl  p-8 rounded-lg py-4'>
        <div className='flex  justify-center gap-2 items-center mt-3 '>
            <img className='sm:w-16 w-[40px]' src="/images/AuthWelcome.png" alt="" />
            <div>
            <h2 className=' font-extrabold text-[#222831] sm:text-3xl text-xl'>Welcome Back</h2>
            <p className='sm:text-xl text-base font-extrabold text-[#393E46]'>Login to continue</p>
            </div>
            
        </div>
       <form
 
  className="form  mt-4"
  onSubmit={handleSignIN}
>
  
  

  <label className="relative ">
    <p className='py-2 sm:text-lg text-base font-bold'>Email</p>
    <input
      required
      name="email"
      placeholder="ex : abc@gmail.com"
      type="email"
      className="input w-full sm:text-lg text-base p-2 mb-2 focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
    />
  </label>
  <label className="relative">
  <p className='py-2 sm:text-lg text-base font-bold'>Password</p>
    <input
      required
      name="password"
      placeholder="ex : PassWord"
      type="password"
      className="input w-full sm:text-lg text-base p-2 mb-2 focus:outline-none focus:border-[#00ADB5] border-2 border-gray-400 rounded-lg"
    />
  </label>
  
  <button type="submit" className=" border sm:text-base text-sm gap-2 bg-gradient-to-r  hover:from-teal-700 hover:to-blue-600 from-teal-600 to-blue-500 text-white  h-[45px] hover:bg-white   w-full mt-5 p-2 rounded-lg   transition duration-300 ease-in">
              Login
            </button>
  
</form> 
<div className="divider">OR</div>
<div className="flex lg:gap-2 gap-1">
          <button
            onClick={handleGoogle}
            className=" bg-white hover:bg-[#EEEEEE] border-2 border-[#393E46] w-full text-[#393E46] font-bold py-2 flex items-center justify-center lg:gap-3 sm:gap-2 gap-1 px-4 rounded-md mt-4"
          >
            <img className="w-[30px]" src="/images/google.png" alt="" />
            Google
          </button>
          <button
            onClick={handelGitHub}
            className=" bg-white hover:bg-[#EEEEEE] border-2 border-[#393E46] w-full text-[#393E46] font-bold py-2 flex items-center justify-center lg:gap-3 sm:gap-2 gap-1 px-4 rounded-md mt-4"
          >
            <img className="w-[30px]" src="/images/github.png" alt="" />
            Github
          </button>
          </div>
  <p className="signin text-gray-700  text-center mt-2 ">
    New user? 
    <Link to={'/register'} className="text-[#00ADB5] ml-2  hover:underline">
      Register
    </Link>
  </p>

       </div>
       
       </div>
       
    );
};

export default Login;