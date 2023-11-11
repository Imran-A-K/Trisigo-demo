"use client";
import React, { useState } from "react";

const Booking = () => {
  const [selectedValue, setSelectedValue] = useState("maldives");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justifiy-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select
            className="lg:w-[300px] md:w-full border rounded-md p-2"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="grandeAntigua">Grande Antigua</option>
            <option value="keyWest">Key West</option>
            <option value="maldives">Maldives</option>
            <option value="cozumel">Cozumel</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col mt-5 p-2 w-full items-center">
          <label>Search</label>
          <button className="w-full bg-slate-300 py-2 rounded">
            Rates & Availabilities
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
