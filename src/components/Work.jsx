import React from 'react'
import workImg from '../assets/logo.png'
import gallery from '../assets/gallery-s.png'
import real from '../assets/to do pic.png'

// import realEstate from '../assets/realEstate'

const Work = () => {
  return (
    <div name='work' className='general-colour w-full md-h-screen text-gray-300 p-4'>
       {/* Container */}
       <div className='max-w-1000 mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'> 
          <p className='text-4xl  inline font-bold border-b-4 border-pink-600'>Work</p>

          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* grid container */}
        <div className='grid sml-grid-cols-3 md-grid-cols-3 gap-4'>
          {/* CARD CONTAINER */}
          <div style={{backgroundImage: `url(${gallery})`}} className='shadow-lg bg-s shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover-opacity-100'>
              <span className='text-2xl font-bold text-white'>
React JS Application
              </span>
              <div className='pt-6 text-center'>
                <a href="https://gallery-with-react-pi.vercel.app/"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href="https://github.com/V1ctorEgan/Gallery-with-react.git"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>

           {/* CARD CONTAINER */}       
          <div style={{backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover-opacity-100'>
              <span className='text-2xl font-bold text-white'>
Flask Application
              </span>
              <div className='pt-6 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href="https://github.com/V1ctorEgan/my-blog.git"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          
                     {/* CARD CONTAINER */}       
                     <div style={{backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover-opacity-100'>
              <span className='text-2xl font-bold text-white'>
Web Application
              </span>
              <div className='pt-6 text-center'>
                <a href="/"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href="https://github.com/V1ctorEgan/second-portfolio.git"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>
                               {/* CARD CONTAINER */}       
                               <div style={{backgroundImage: `url(${real})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover-opacity-100'>
              <span className='text-2xl font-bold text-white'>
React Js Application d
              </span>
              <div className='pt-6 text-center'>
                <a href="https://my-keeper-version-fcmd.vercel.app/"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Demo</button></a>
                <a href="https://github.com/V1ctorEgan/my-keeper-version.git"> <button className='text-center rounded-lg px-4 py-3 bg-white m-2 font-bold text-gray-700 text-lg'>Code</button></a>
              </div>
            </div>
          </div>

          
        </div>
       </div>
       
    </div>
  )
}

export default Work