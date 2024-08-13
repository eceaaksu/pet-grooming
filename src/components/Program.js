import React from 'react';
import PhoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return (
  <div>
    {/* phone icon & phone number */}
    <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
      <img className= 'w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]' src={PhoneIcon} alt='' />
      <div className='lg-text-[23px] text-blue font-extrabold'>+ 1 000 10 84 000 </div>
    </div>
    {/* open hours */}
    <div className='text-sm'>
        {/* shows only in Desktop Mode */}
      <div className='hidden lg:flex'>Opening Hours: Mon-Sun: 10am - 6pm</div>
      {/* shows only in Mobile Mode */}
      <div className='lg:hidden text-right'> Mon-Sun: 10am - 6pm</div> 
    </div>
    </div>
  );
};

export default Program;
