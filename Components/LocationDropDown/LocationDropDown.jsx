import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import './LocationDropDown.css'

function LocationDropDown({ size }){
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    axios.get('https://65f4247af54db27bc02098af.mockapi.io/DistrictName')
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the locations!', error);
      });
  }, []);

  const handleChange = (event) => {
    const locationId = event.target.value;
    const location = locations.find(loc => loc.id === locationId);
    setSelectedLocation(location);
  };

  return (
    <div className={`dropdown-container ${size}`}>
      <div className="dropdown">
        <div className="dropdown-selected">
        <CiLocationOn class="location-icon" />
          {selectedLocation ? (
            <span className="location-text">
              Delivery to {selectedLocation.locationName} {selectedLocation.postalCode}
            </span>
          ) : (
            <span class="location-text">
              Delivery to Theni 625531
              </span>
          )}
          <RiArrowDropDownLine class="dropdown-arrow" />
        </div>
        <select onChange={handleChange} className="dropdown-select">
          <option value="" disabled selected>Delivery to Theni 625531 </option>
          {locations.map(location => (
            <option key={location.id} value={location.id}>
              {location.locationName} {location.postalCode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationDropDown;
