import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Postgres from '../assets/postgres.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen general-colour text-gray-300'>

        {/* container */}
        <div className='max-w-1000 mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl  inline font-bold border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sml-grid-cols-4 gap-4 text-center py-8'>  
                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'> HTML</p>
                </div>
                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
                    <p className='my-4'> CSS</p>
                </div>                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                    <p className='my-4'>JAVASCRIPT  </p>
                </div>                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon" />
                    <p className='my-4'> REACT</p>
                </div>                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={Node} alt="HTML Icon" />
                    <p className='my-4'> NODE JS</p>
                </div>                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML Icon" />
                    <p className='my-4'> GITHUB</p>
                </div>                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={Postgres} alt="HTML Icon" />
                    <p className='my-4'> POSTGRES DB</p>
                </div>
                <div className='shadow-md shadow-icons scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
                    <p className='my-4'> TAILWIND</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills