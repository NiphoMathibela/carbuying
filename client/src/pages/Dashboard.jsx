import React, { useContext, useEffect } from 'react';
import { carData } from '../assets/carData';
import DashboardCarTile from '../components/DashboardCarTile';
import MobileMenu from "../components/MobileMenu";
import { appContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {

  const userDetail = useParams();
  const userMail = userDetail.toString();

  const { loggedInDetails, loggedInEmail, setLoggedInEmail, currentUser, setCurrentUser, isLoggedIn, menuIsOpen } = useContext(appContext);

  const CurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user);
        setLoggedInEmail(user.email)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  useEffect(() => {
    CurrentUser();
    //Fetch user data
    async function fetchUserData() {
      const url = `https://localhost:7069/user/User/${loggedInEmail}`; // assuming User/{userId} for GET requests

      try {
        const response = await fetch(url, {
          method: 'GET', // Specify GET method
          headers: {
            'Accept': 'application/json', // Indicate expected JSON response
          }
        });

        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched user data:', data);
        setCurrentUser(data);
        return data; // Optionally return the fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw for potential error handling in calling code
      }
    }
    fetchUserData();
  }, [])


  const dashCars = carData.map((car) => (
    <DashboardCarTile
      key={car.id}
      car={car.car}
      brand={car.brand}
      img={car.img}
      gearType={car.gearType}
      consumption={car.consumption}
      seats={car.seats}
      price={car.price}
      year={car.year}
      model={car.model}
      carId={car.id}
    />
  ));

  return (
    <div>
      {menuIsOpen ? <MobileMenu /> : ""}
      <div className='mt-20 text-[#3563E9] w-9/12 mx-auto '>
        <div className='text-left'>
          <h2 className='h-20 text-3xl font-bold bg-gradient-to-r from-[#3563E9] from-10% via-[#819cef] via-30% to-[#d442fd] to-90% inline-block text-transparent bg-clip-text'>{isLoggedIn ? currentUser.name : "User"}'s Dashboard</h2>
          <div className='my-4 w-full'>
            <div><h4 className=' text-lg font-semibold'>Your current listings</h4></div>
            {dashCars}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard