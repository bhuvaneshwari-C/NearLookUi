import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Slider from "./Components/Slider/Slider";
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import ItemGrid2 from "./Components/FeaturedCategories/ItemGrid2";
import BestSellProduct from "./Components/DailyBestSell/BestSellProduct";
import TodaysDeal from "./Components/TodaysDeal/TodaysDeal";
import ProductTabs from "./Components/ProductTabs/ProductTabs";
import Footer from "./Components/Footer/Footer";
import SecondaryNavbar from "./Components/SecondaryNavbar/SecondaryNavbar";
import FeaturedCategories from "./Components/FeaturedCategories/FeaturedCategories";

function App() {
  return (
    <div>
      <MainNavbar />
      <SecondaryNavbar/> 
      <Slider />
      <FeaturedCategories />
      <ItemGrid2 />
      <PopularProducts />
      <BestSellProduct />
      <TodaysDeal />
      <ProductTabs /> 
      <Footer />   
    </div>
  );
}
export default App;
