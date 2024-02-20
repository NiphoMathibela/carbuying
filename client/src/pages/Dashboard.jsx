import React, { useContext, useEffect } from 'react';
import { carData } from '../assets/carData';
import DashboardCarTile from '../components/DashboardCarTile';
import { appContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const Dashboard = () => {

  const userDetail = useParams();
  const userMail = userDetail.toString();

  const { loggedInDetails, isLoggedIn, CurrentUser, setLoggedInDetails, loggedInEmail } = useContext(appContext);

  useEffect(() => {
    CurrentUser();
    //Fetch user data
    fetch(`https://localhost:7069/user/User/${loggedInEmail}`, {method: 'GET'})
      .then(response => response.json())
      .then(fetchedData => setLoggedInDetails(fetchedData))
    console.log("Currently logged in", loggedInDetails)
      .catch(error => setError(error));
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
    <div className='mt-20 text-[#3563E9] w-9/12 mx-auto '>
      <div className='text-left'>
        <h2 className='text-3xl font-bold'>{isLoggedIn ? loggedInDetails.name : "User"}'s Dashboard</h2>

        <div className='my-6 w-full'>
          <div><h4 className=' text-lg font-semibold'>Your current listings</h4></div>
          {dashCars}
        </div>
      </div>
    </div>
  )
}

export default Dashboard