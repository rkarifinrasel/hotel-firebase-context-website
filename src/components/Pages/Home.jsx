import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Home = () => {
    const [showAll,setShowAll]=useState(false)
    const [datas,setDatas]=useState()

    const handleShowAll=()=>{
        setShowAll(true)
    }

    useEffect(()=>{
        fetch('http://localhost:3000/datas')
        .then(res=>res.json())
        .then(data=>setDatas(data))
        .catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div className=''>
            <div className='grid rounded-sm gap-4 m-10 lg:grid-cols-3 md:grid-cols-2'>
            
            {datas &&
              datas.slice(0,showAll ? 12 : 3).map(data=><Cart data={data}key={data.id} ></Cart>)  
            }
        </div>
        {
            ! showAll &&
            <span className='justify-center items-center flex' onClick={handleShowAll}>
                <button className='bg-green-600 pl-4 pr-4 pt-2 pb-2 rounded-sm'>See More</button>
            </span>
        }
        </div>
       
    );
};

export default Home;