import React from 'react';
import acheivementImg from '../assets/achievement.png'
import { SlGraduation } from "react-icons/sl";
import {FiVideo} from 'react-icons/fi';
import {SlPeople} from 'react-icons/sl'


const Acheivement = () => {
   return (
      <div className='w-full bg-white py-24'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>
         <div className='flex flex-col justify-start gap-4'>
            <h1 className='md:leading-10 text-3xl  font-bold '>Our <span  className='text-[#20B486]'> Achievement </span> </h1>
              <p className='text-lg text-gray-500 py-2'>Various versions have evolved over the years, sometimes by accident,</p>
               <div className='grid md:grid-cols-2'>
                  <div className=' py-6 flex'>
                       <div className='bg-[#E9F8F3] p-4 rounded-xl'>
                       <SlGraduation
                       size={30}
                       style={{color:"#1A906B"}}
                       />
                       </div>
                       <div className='px-3'>
                        <h3 className='text-xl font-semibold'>300 </h3>
                        <p className='text-[#6D737A]'>Instructor</p>
                       </div>
                  </div>
                  <div className=' py-6 flex'>
                       <div className='bg-[#E9F8F3] p-4 rounded-xl'>
                        <FiVideo 
                                size={30}
                                style={{color:'#FFC27A'}}
                            />
                    
                       </div>
                       <div className='px-3'>
                        <h3 className='text-xl font-semibold'>10000+ </h3>
                        <p className='text-[#6D737A]'>Vedio</p>
                       </div>
                  </div>
                  <div className=' py-6 flex'>
                       <div className='bg-[#E9F8F3] p-4 rounded-xl'>
                       <SlGraduation
                       size={30}
                       style={{color:"#1A906B"}}
                       />
                       </div>
                       <div className='px-3'>
                        <h3 className='text-xl font-semibold'>10000+ </h3>
                        <p className='text-[#6D737A]'>Students</p>
                       </div>
                  </div>
                  <div className=' py-6 flex'>
                       <div className='bg-[#E9F8F3] p-4 rounded-xl'>
                       <SlPeople 
                       size={30}
                       style={{color:'#0075FD'}}
                       />
                       </div>
                       <div className='px-3'>
                        <h3 className='text-xl font-semibold'>12300 </h3>
                        <p className='text-[#6D737A]'>Users</p>
                       </div>
                  </div>
               </div>
            </div>
            <img src={acheivementImg} alt="acheivementImg" className='m-auto md:order-last order-first'/>
      </div>
             
      
   </div>
   )
};

export default Acheivement;