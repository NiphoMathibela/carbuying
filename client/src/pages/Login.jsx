import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import MainButton from '../components/MainButton';
import { useNavigate } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Login = () => {

  //Navigator
  let navigate = useNavigate();

  //Importing values from AppContext
  const { loginDetails, setLoginDetails, LoginUser, menuIsOpen } = useContext(appContext);

  //Handlin from data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevLoginDetails) => ({
      ...prevLoginDetails,
      [name]: value
    }));
  };

  return (
    <div>
      {menuIsOpen ? <MobileMenu /> : ""}
      <div className='p-5 mt-28'>
        <div className='w-full shadow-lg mx-auto rounded p-3 mt-4 max-w-md lg:p-5 '>
          <div className='my-2'>
            <p className='text-left font-semibold text-lg'>Email</p>
            <input type="text" value={loginDetails.email} id='email' name='email' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
          </div>

          <div className='my-2'>
            <p className='text-left font-semibold text-lg'>Password</p>
            <input type="text" value={loginDetails.password} id='password' name='password' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
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