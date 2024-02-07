import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import MainButton from '../components/MainButton';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    let navigate = useNavigate();

    //Importing values from AppContext
    const { regDetails, setRegDetails, Register } = useContext(appContext);

    //Handlin from data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegDetails((prevRegDetails) => ({
            ...prevRegDetails,
            [name]: value
        }));
    };

    return (
        <div className=' p-5'>
            <div className=' w-full shadow-lg mx-auto rounded p-3 mt-4 max-w-lg lg:p-5'>
                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Name</p>
                    <input type="text" value={regDetails.name} id='name' name='name' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Last name</p>
                    <input type="text" value={regDetails.lastName} id='lastName' name='lastName' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Type of user</p>
                    <select type="text" value={regDetails.typeOfUser} id='typeOfUser' name='typeOfUser' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 8 cylinder'>
                        <option value="">Select user type</option>
                        <option value="Car">Private/Individual</option>
                        <option value="Truck">Dealer</option>
                    </select>
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Email</p>
                    <input type="text" value={regDetails.email} id='email' name='email' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Password</p>
                    <input type="text" value={regDetails.password} id='password' name='password' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout e-mail' />
                </div>

                <div className='mt-8'>
                    <MainButton btnText="Register" btnFunction={Register} />
                    <p className='text-[#3563E9] underline decoration-solid decoration-[#3563E9] cursor-pointer' onClick={() => navigate("/loginUser")}>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Register 