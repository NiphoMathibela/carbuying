import React, { useContext } from 'react';
import { carData } from '../assets/carData';
import DashboardCarTile from '../components/DashboardCarTile';
import { appContext } from '../context/AppContext';

const Dashboard = () => {

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [url]); // Only re-fetch if the url changes

    const {loggedInDetails, isLoggedIn} = useContext(appContext);

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