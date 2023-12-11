import React, { useState } from 'react'
import MainButton from '../components/MainButton'
import axios from 'axios';

const SellCar = () => {

    const [sellForm, setSellForm] = useState({
        carName: "",
        brand: "",
        model: "",
        colour: "",
        bodyType: "",
        price: "",
        mileage: "",
        gearType: "",
        fuelType: "",
        engine: "",
        engineSize: "",
        power: "",
        fuelCons: "",
        seats: "",
        year: "",
        location: "",
        drive: "",
        sellerType: "",
        vehicleType: ""
    });

    //Headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        "Accept": "application/json",
  "content-type":"application/json"
    };

    //Submitting sell car form
    const submitSellForm = (e) => {
        e.preventDefault();
        console.log(sellForm);
        fetch("https://localhost:7069/api/Cars", {
            method: "POST",
            body: JSON.stringify(sellForm),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "application/json",
                "content-type":"application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    //Handlin from data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSellForm((prevSellForm) => ({
            ...prevSellForm,
            [name]: value
        }));
    };

    return (
        <div className='px-4'>
            <div className=' w-full h-72 rounded-md mx-auto my-4'>
                <img className='w-full object-cover object-center rounded-md max-h-72' src='https://images.unsplash.com/photo-1604447199408-9798f9f64f88?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>

            <h2 className='text-3xl font-bold text-[#3563E9]'>Sell your car instantly</h2>

            {/* Selling  car form */}
            <div className=' w-full shadow-lg mx-auto rounded p-3 mt-4 lg:w-4/6 xl:w-2/5 lg:p-5'>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Make</p>
                    <input type="text" value={sellForm.brand} id='brand' name='brand' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter make' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Model</p>
                    <input type="text" value={sellForm.model} id='model' name='model' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter model' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Year</p>
                    <input type="number" value={sellForm.year} id='year' name='year' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 2018' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Milieage</p>
                    <input type="number" value={sellForm.mileage} id='mileage' name='mileage' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 15000' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Location</p>
                    <input type="text" value={sellForm.location} id='makeAndModel' name='location' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter location' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Body type</p>
                    <input type="text" value={sellForm.bodyType} id='bodyType' name='bodyType' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter body type' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Transmission</p>
                    <input type="number" value={sellForm.gearType} id='gearType' name='gearType' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter transmission type' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Fuel type</p>
                    <input type="number" value={sellForm.fuelType} id='fuelType' name='fuelType' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter fuel type' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Engine type</p>
                    <input type="text" value={sellForm.engine} id='engine' name='engine' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 8 cylinder' />
                </div>

                {/* New ones */}
                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Engine size</p>
                    <input type="number" value={sellForm.engineSize} id='engineSize' name='engineSize' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 2.0L' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Power</p>
                    <input type="text" value={sellForm.power} id='power' name='power' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter the cars powe e.g 166Kwh' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Consumption</p>
                    <input type="text" value={sellForm.fuelCons} id='fuelCons' name='fuelCons' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter body type' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Seats</p>
                    <input type="number" value={sellForm.seats} id='seats' name='seats' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter transmission type' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Drive</p>
                    <input type="text" value={sellForm.drive} id='drive' name='drive' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='Enter fuel type' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Seller type</p>
                    <input type="text" value={sellForm.sellerType} id='sellerType' name='sellerType' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 8 cylinder' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Vehicle type</p>
                    <input type="text" value={sellForm.vehicleType} id='vehicleType' name='vehicleType' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 8 cylinder' />
                </div>

                <div className='my-2'>
                    <p className='text-left font-semibold text-lg'>Price</p>
                    <input type="number" value={sellForm.price} id='price' name='price' onChange={handleChange} className='rounded-md border border- w-full h-9 p-2 focus:outline-none focus:ring focus:border-blue-500' placeholder='e.g 8 cylinder' />
                </div>

                {/* Form buttons */}
                <div>
                    <MainButton btnText="Reset" />
                    <MainButton btnText="Sell" btnFunction={submitSellForm} />
                </div>
            </div>
        </div>
    )
}

export default SellCar