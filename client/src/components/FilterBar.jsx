import React from "react";

const FilterBar = () => {
  return (
    <>
      <div className="w-full h-full rounded-md drop-shadow-md bg-[#F6F7F9] text-left p-4 text-[#596780]">
        <p className=" font-semibold mb-6">Body type</p>
        {/* body type checkboxes */}

        <div className="mb-2">
          <input type="checkbox" id="any" name="any"></input>
          <label htmlFor="any" className="ml-2">Any</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="cabriolet" name="cabriolet"></input>
          <label htmlFor="cabriolet" className="ml-2">Cabriolet</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="coupe" name="coupe"></input>
          <label htmlFor="coupe" className="ml-2">Coupe</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="sedan" name="sedan"></input>
          <label htmlFor="sedan" className="ml-2">Sedan</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="suv" name="suv"></input>
          <label htmlFor="suv" className="ml-2">SUV</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="hatch" name="hatch"></input>
          <label htmlFor="hatch" className="ml-2">Hatchback</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="bakkie" name="bakkie"></input>
          <label htmlFor="bakkie" className="ml-2">Bakkie</label>
        </div>

        <p className=" font-semibold my-6">Gearbox</p>
        {/* gear type checkboxes */}

        <div className="mb-2">
          <input type="checkbox" id="auto" name="auto"></input>
          <label htmlFor="auto" className="ml-2">Automatic</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="manual" name="manula"></input>
          <label htmlFor="manual" className="ml-2">Manual</label>
        </div>

        <p className=" font-semibold my-6">Fuel</p>
        {/* fuel type checkboxes */}

        <div className="mb-2">
          <input type="checkbox" id="anyFuel" name="anyFuel"></input>
          <label htmlFor="anyFuel" className="ml-2">Any</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="diesel" name="diesel"></input>
          <label htmlFor="diesel" className="ml-2">Diesel</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="petrol" name="petrol"></input>
          <label htmlFor="petrol" className="ml-2">Petrol</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="electric" name="electric"></input>
          <label htmlFor="electric" className="ml-2">Electric</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="hybrid" name="hybrid"></input>
          <label htmlFor="hybrid" className="ml-2">Hybrid</label>
        </div>

        <p className=" font-semibold my-6">Vehicle type</p>
        {/* vehicle type checkboxes */}

        <div className="mb-2">
          <input type="checkbox" id="commercial" name="commercial"></input>
          <label htmlFor="commercial" className="ml-2">Commercial</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="passenger" name="passenger"></input>
          <label htmlFor="diesel" className="ml-2">Passenger</label>
        </div>

        <p className=" font-semibold my-6">Seller type</p>
        {/* seller type checkboxes */}

        <div className="mb-2">
          <input type="checkbox" id="dealer" name="dealer"></input>
          <label htmlFor="commercial" className="ml-2">Dealer</label>
        </div>

        <div className="mb-2">
          <input type="checkbox" id="private" name="private"></input>
          <label htmlFor="private" className="ml-2">Private</label>
        </div>
        
      </div>
    </>
  );
};

export default FilterBar;
