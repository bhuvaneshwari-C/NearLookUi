import React from "react";
import { IoIosSearch } from "react-icons/io";
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="search-dropdown">
                    <select>
                        <option value='' disabled selected>All Categories</option>
                        <option>Milk Products</option>
                        <option>Vegetable</option>
                        <option>Fruits</option>
                        <option>Meats</option>
                        <option>Pet Foods</option>
                        <option>Coffee & Tea</option>
                    </select>
                </div>
                <input type="text" placeholder="Search for items..." />
                <IoIosSearch className="search-icon" />
            </div>
        </div>
    );
}

export default SearchBar;
