import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import MainButton from '../components/MainButton';

const Login = () => {

  //Importing values from AppContext
  const {loginDetails, setLoginDetails} = useContext(appContext);

    //Handlin from data change
    const handleChange = (e) => {
      const { name, value } = e.target;
      loginDetails((prevLoginDetails) => ({
          ...prevLoginDetails,
          [name]: value
      }));
  };

  return (
    <div>
      <div className='my-2'>
        <p className='text-left font-semibold text-lg'>Email</p>
        <input type="text" value={loginDetails.email} id='email' name='email' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
      </div>

      <div className='my-2'>
        <p className='text-left font-semibold text-lg'>Password</p>
        <input type="text" value={loginDetails.password} id='password' name='password' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
      </div>

      <div>
        <MainButton btnText= "Login"/>
      </div>
    </div>
  )
}

export default Login 