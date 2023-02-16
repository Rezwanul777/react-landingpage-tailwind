import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

//image import
import heroImg from '../assets/hero1.png';


const HerSection = () => {
   return (
      <div className='w-full bg-white py-24'>
         <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>
               <div className='flex flex-col justify-start gap-4'>
                  <p className='text-2xl text-[#20B486] font-medium py-2'>START TO SUCCESS</p>
                  <h1 className='md:leading-[72px] md:text-6xl text-5xl font-semibold py-2'>Access To <span className='text-[#20B486]'>20+</span> Courses
                    from <span  className='text-[#20B486]'> 10 </span>Instructors & Institutions</h1>
                  <p className='text-lg text-gray-500 py-2'>Various versions have evolved over the years, sometimes by accident,</p>
                  <form className='bg-white border max-w-[700px] p-4 input-box-shadow rounded-md flex justify-between'>
                     <input type="text"  className='bg-white'
                        placeholder='What do want to learn?'/>
                        <button>
                        <AiOutlineSearch  size={20}
                            className="icon"
                            style={{color:'#000'}}/>
                        </button>
                  </form>

               </div>
               <img src={heroImg} alt="heoimg" className='md:order-last order-first'/>
         </div>
                
         
      </div>
   );
};

export default HerSection;