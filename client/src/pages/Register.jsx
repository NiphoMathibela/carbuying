import React, { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { auth} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import MainButton from '../components/MainButton';
import MobileMenu from "../components/MobileMenu";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    let navigate = useNavigate();

    //Importing values from AppContext
    const { regDetails, setRegDetails, menuIsOpen, setIsLoggedIn } = useContext(appContext);

    //Handlin from data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegDetails((prevRegDetails) => ({
            ...prevRegDetails,
            [name]: value
        }));
    };

    //Creating new users
  const Register = async () => {

    try {
      const newUser = await createUserWithEmailAndPassword(auth, regDetails.email, regDetails.password);

      //Posting to mongoDB User collection
      fetch("https://carbuying.onrender.com/user", {
        method: "POST",
        body: JSON.stringify(regDetails),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json",
          "content-type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            setIsLoggedIn(true);
            navigate("/dashboard")
        })

      //Testing
      console.log(newUser)
      console.log(regDetails)
    } catch (error) {
      console.log(error.message)
    }
  }

    return (
        <div>
            {menuIsOpen ? <MobileMenu /> : ""}
            <div className=' p-5 mt-24'>
                <div className=' w-full shadow-lg mx-auto rounded p-3 mt-4 max-w-lg lg:p-5'>
                    <h1 className=' h-16 text-4xl font-bold bg-gradient-to-r from-[#3563E9] from-10% via-[#819cef] via-30% to-[#d442fd] to-90% inline-block text-transparent bg-clip-text'>Sign Up</h1>
                    <div className='my-2'>
                        <p className='text-left font-semibold text-lg'>Name</p>
                        <input type="text" value={regDetails.name} id='name' name='name' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter your name' />
                    </div>

                    <div className='my-2'>
                        <p className='text-left font-semibold text-lg'>Last name</p>
                        <input type="text" value={regDetails.lastName} id='lastName' name='lastName' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter yout lastname' />
                    </div>

                    <div className='my-2'>
                        <p className='text-left font-semibold text-lg'>Type of user</p>
                        <select type="text" value={regDetails.userType} id='userType' name='userType' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 8 cylinder'>
                            <option value="">Select user type</option>
                            <option value="Individual">Private/Individual</option>
                            <option value="Dealer">Dealer</option>
                        </select>
                    </div>

                    <div className='my-2'>
                        <p className='text-left font-semibold text-lg'>Email</p>
                        <input type="text" value={regDetails.email} id='email' name='email' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter your e-mail' />
                    </div>

                    <div className='my-2'>
                        <p className='text-left font-semibold text-lg'>Password</p>
                        <input type="password" value={regDetails.password} id='password' name='password' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter a password' />
                    </div>

                    <div className='mt-8'>
                        <MainButton btnText="Register" btnFunction={Register} />
                        <p className='text-[#3563E9] underline decoration-solid decoration-[#3563E9] cursor-pointer' onClick={() => navigate("/loginUser")}>Sign In</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register 