import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isHeartfill, setIsHeartfill] = useState(false);

  const handleheartfill = () => {
    setIsHeartfill(!isHeartfill);
  };
  return (
    <div className="card w-96 bg-gradient-to-r from-slate-200 to-gray-200 shadow-xl relative">
      <div 
      className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartfill ?  
        "text-rose-500" : "text-white"}`}
       onClick={handleheartfill} 
        >
       <FaHeart className="h-5 w-5 cursor-pointer"/>
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            className="hover:scale-105 transition-all duration-200 md:h-72"
            alt=""
          />
        </figure>
      </Link>
      <div className="card-body">
      <Link  to={`/menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
        <p>{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">₹</span> {item.price}
          </h5>
          <button className="btn bg-orange text-white ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
