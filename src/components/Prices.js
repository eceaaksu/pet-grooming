import React, {useEffect, useState} from 'react';
import {bundleData} from '../data';
import Bundles from './Bundles';

const Prices = () => {

  const [index, setIndex] = useState(0);
  const[bundles, setBundles] = useState([]);

  useEffect(()=> {
   setBundles(bundleData[0].services);
  }, [])

  const getBundle = (name) => {
   const newBundle = bundleData.find((bundle) => {
    return bundle.name === name;
   });
    setBundles(newBundle.services);
  };

  return (
   <section className='py-12 lg:py-24'>
    <div className='container mx-auto'>
    {/* text */}
    <div className='text-center mb-30'>
      <div className='text-orange font-semibold mb-3'>Our Prices</div>
      <h2 className='h2'>How Big Your Dog Is?</h2>
      <p className='text-lg text-blue'>Choose your dog category</p>
    </div>
    {/* grid */}
    <div className='grid grid-cols-4 gap-4 lg:gap-[30px]'>
      {bundleData.map((item, idx) => {
        const{ name, image, dogCategory } = item;
        return (
         <div onClick={()=>{
          setIndex(idx);
          getBundle(name);
         } } 
         className='cursor-pointer text-center' key={idx}>
          {/* image */}
          <div className='mb-2 lg:mb-8 hover:scale-105 transition-all duration-300'>
           <img src={image.type} alt='' />
          </div>
          <h3 className='lg:text-2xl capitalize font-semibold text-blue lg:mb-2'>{name}</h3>
          {/* category text */}
          <div className={`${index === idx ? 'border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative' : 'border-b-4 border-transparent'} pb-4 mb-12`}>
           <div className='hidden lg:block capitalize'>{dogCategory}</div>
          </div>
        </div>
        );
      })}
    </div>
    {/* bundles */}
    <Bundles bundles={bundles}/>
    </div>
    </section>
  );
};

export default Prices;
