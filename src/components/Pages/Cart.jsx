import React, { useState } from 'react';
import { FaArrowRight, FaBed, FaBeer, FaPeopleArrows, FaPersonBooth } from 'react-icons/fa';
import { BiBody } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Cart = ({data}) => {
   
    const {id,image,type,roomName,roomDescription,rent,person,bed}=data;
    return (
        <div className='bg-gray-300 pl-4 pr-4 pt-4 flex flex-col'>
            <div className='flex inline-flex mb-2 mt-2 '>
                <FaArrowRight className='text-lime-600'></FaArrowRight>
                <h1 className='-mt-1 font-bold mb-4'>{type}</h1>
            </div>
            <img className='w-full h-40 mb-4' src={image} alt="" srcset="" />
            <div className='mb-4'>
            <h1 className='font-bold'>{roomName}</h1>
            <p>{roomDescription}</p>
            </div>
            <div className='flex justify-around items-center justify-center  mb-0 '>
                
               <p className='inline-flex'>
               <FaBed className=''></FaBed>
               <p className='-mt-1' >:{bed}</p>
               </p>

                <p className='inline-flex'>
                <BiBody/><BiBody/>
                <p className='-mt-1' >:{person}</p>
                </p>

                <p className='inline-flex'>${rent}</p>
               <Link to='/book'> <button className="rounded-sm bg-green-600 pl-2 pr-2">Book</button></Link>
            </div>
        </div>
        
    );
};

export default Cart;