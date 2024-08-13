import React from 'react';

import{ BsCheckCircleFill } from 'react-icons/bs'

const Bundles = ({bundles}) => {
  console.log(bundles);
  return (
   <div className='flex flex-col md:flex-row justify-between gap-[30px]'>
    {bundles.map((bundle, index)=> {
    
    console.log(bundle);
    const{ name, price, list } = bundle;
    return (
    <div className='w-full lg:max-w-1/3 bg-white shadow shadow-primary text-center h-[560px] rounded-[60px] py-12 px-8'key={index}>
      {/* price */}
      <div className='text-5xl font-bold text-blue mb-4 '>${price}</div>
      {/* name */}
      <div className='capitalize mb-12 text-blue font-medium'>{name}</div>
      {/* list */}
      <div className='flex flex-col gap-y-4 max-w-[230px] mx-auto'>
        {list.map((item, index) => {
        return (
          <div className='flex items-center gap-x-3' key={index}>
            <BsCheckCircleFill className='text-orange text-xl' />
            <div className='capitalize'>{item}</div>
          </div>
           );
         })}
     </div>
   </div>
    );
  })}
</div>
  ); 
};

export default Bundles;
