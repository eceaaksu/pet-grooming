import React from 'react';
import {navigation} from '../data';

const NavMobile = () => {
  return (
  <nav className='h-full'>
    <ul className='flex flex-col justify-center items-center h-full space-y-5'>
      {navigation.map((item, index)=>{
        return (
         <li className='capitaize font-medium text-blue' key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      );
      })}
    </ul>
    NavMobile
    </nav>
  );
};

export default NavMobile;
