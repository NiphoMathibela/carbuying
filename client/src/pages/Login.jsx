import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import MainButton from '../components/MainButton';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import MobileMenu from '../components/MobileMenu';

const Login = () => {

  //Navigator
  let navigate = useNavigate();

  //Importing values from AppContext
  const { loginDetails, setLoginDetails, menuIsOpen, setIsLoggedIn, setLoggedInEmail } = useContext(appContext);

  //Handlin from data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevLoginDetails) => ({
      ...prevLoginDetails,
      [name]: value
    }));
  };

  const LoginUser = async () => {
    signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setLoggedInEmail(loginDetails.email)
        setIsLoggedIn(true);

        //Redirect signed in user to dash board

      }).then(() => {navigate("/dashboard")})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      {menuIsOpen ? <MobileMenu /> : ""}
      <div className='p-5 mt-28'>
        <div className='w-full shadow-lg mx-auto rounded p-3 mt-4 max-w-md lg:p-5 '>
          <h1 className=' h-16 text-4xl font-bold bg-gradient-to-r from-[#3563E9] from-10% via-[#819cef] via-30% to-[#d442fd] to-90% inline-block text-transparent bg-clip-text'>Sign In</h1>
          <div className='my-2'>
            <p className='text-left font-semibold text-lg'>Email</p>
            <input type="text" value={loginDetails.email} id='email' name='email' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter your e-mail' />
          </div>

          <div className='my-2'>
            <p className='text-left font-semibold text-lg'>Password</p>
            <input type="password" value={loginDetails.password} id='password' name='password' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter your password' />
          </div>

          <div className='mt-6'>
            <MainButton btnText="Login" btnFunction={LoginUser} />
            <p className='text-[#3563E9] underline decoration-solid decoration-[#3563E9] cursor-pointer' onClick={() => navigate("/registerUser")}>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login 