import React from "react";
import { CiGrid41 } from "react-icons/ci";
import '../ShopCategories/ShopCategories.css';

function ShopCategories({size}){
    return(
        <div>
            <div className={`categories-container ${size}`}>
                <div className='categories-dropDown'>
                <CiGrid41 className='grid-icon' />
            <select>
                <option value=''disabled selected>Shop By Categories</option>
                    <option>Milk Products</option>
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Meats</option>
                    <option>Pet Foods</option>
                    <option>Coffee & Tea</option>
            </select>
            </div>
            </div>
        </div>
    )
}
export default ShopCategories;