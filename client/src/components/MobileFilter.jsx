import React from "react";
import MainButton from "./MainButton";
import { useContext } from "react";
import { appContext } from "../context/AppContext";
import { carData } from "../assets/carData";
import { IoCloseSharp } from "react-icons/io5";

const MobileFilter = () => {

    const { filterTags, setFilterTags, setFilterOpen, ToggleMobileFilter} = useContext(appContext);


    //Handling from data change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setSellForm((prevSellForm) => ({
            ...prevSellForm,
            [name]: value
        }));
    };


    const filterHandler = (event) => {
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value])
            console.log(filterTags)

        }
        else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== event.target.value)
            )
        }
    }



    return (
        <>
            <div className="w-full h-[95%] rounded-md drop-shadow-md bg-[#F6F7F9] text-left text-[#596780] top-14 fixed z-30 overflow-y-scroll p-6">
                <div onClick={ToggleMobileFilter} className="right-0 mb-4 w-fit">
                    <IoCloseSharp size={28}/>
                </div>
                <p className=" font-semibold mb-6">Body type</p>
                {/* body type checkboxes */}

                <div className="mb-2">
                    <input type="checkbox" id="any" name="any" value={""} onChange={filterHandler}></input>
                    <label htmlFor="any" className="ml-2">Any</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="cabriolet" name="cabriolet" value={"Cabriolet"} onChange={filterHandler}></input>
                    <label htmlFor="cabriolet" className="ml-2">Cabriolet</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="coupe" name="coupe" value={"Coupe"} onChange={filterHandler}></input>
                    <label htmlFor="coupe" className="ml-2">Coupe</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="sedan" name="sedan" value={"Sedan"} onChange={filterHandler}></input>
                    <label htmlFor="sedan" className="ml-2">Sedan</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="suv" name="suv" value={"SUV"} onChange={filterHandler}></input>
                    <label htmlFor="suv" className="ml-2">SUV</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="hatch" name="hatch" value={"Hatchback"} onChange={filterHandler}></input>
                    <label htmlFor="hatch" className="ml-2">Hatchback</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="bakkie" name="bakkie" value={"Bakkie"} onChange={filterHandler}></input>
                    <label htmlFor="bakkie" className="ml-2">Bakkie</label>
                </div>

                <p className=" font-semibold my-6">Gearbox</p>
                {/* gear type checkboxes */}

                <div className="mb-2">
                    <input type="checkbox" id="auto" name="auto" value={"Auto"} onChange={filterHandler}></input>
                    <label htmlFor="auto" className="ml-2">Automatic</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="manual" name="manual" value={"Manual"} onChange={filterHandler}></input>
                    <label htmlFor="manual" className="ml-2">Manual</label>
                </div>

                <p className=" font-semibold my-6">Fuel</p>
                {/* fuel type checkboxes */}

                <div className="mb-2">
                    <input type="checkbox" id="anyFuel" name="anyFuel" value={"AnyFuel"} onChange={filterHandler}></input>
                    <label htmlFor="anyFuel" className="ml-2">Any</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="diesel" name="diesel" value={"Diesel"} onChange={filterHandler}></input>
                    <label htmlFor="diesel" className="ml-2">Diesel</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="petrol" name="petrol" value={"Petrol"} onChange={filterHandler}></input>
                    <label htmlFor="petrol" className="ml-2">Petrol</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="electric" name="electric" value={"Electric"} onChange={filterHandler}></input>
                    <label htmlFor="electric" className="ml-2">Electric</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="hybrid" name="hybrid" value={"Hybrid"} onChange={filterHandler}></input>
                    <label htmlFor="hybrid" className="ml-2">Hybrid</label>
                </div>

                <p className=" font-semibold my-6">Vehicle type</p>
                {/* vehicle type checkboxes */}

                <div className="mb-2">
                    <input type="checkbox" id="commercial" name="commercial" value={"Commercial"} onChange={filterHandler}></input>
                    <label htmlFor="commercial" className="ml-2">Commercial</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="passenger" name="passenger" value={"Passenger"} onChange={filterHandler}></input>
                    <label htmlFor="diesel" className="ml-2">Passenger</label>
                </div>

                <p className=" font-semibold my-6">Seller type</p>
                {/* seller type checkboxes */}

                <div className="mb-2">
                    <input type="checkbox" id="dealer" name="dealer" value={"Dealer"} onChange={filterHandler}></input>
                    <label htmlFor="commercial" className="ml-2">Dealer</label>
                </div>

                <div className="mb-2">
                    <input type="checkbox" id="private" name="private" value={"Private"} onChange={filterHandler}></input>
                    <label htmlFor="private" className="ml-2">Private</label>
                </div>

                <div className="mx-auto w-fit my-3">
                    <MainButton btnText="Search" btnFunction = {ToggleMobileFilter}/> 
                </div>

            </div>
        </>
    );
};

export default MobileFilter;
