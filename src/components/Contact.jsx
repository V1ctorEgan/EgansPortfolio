import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen general-colour flex justify-center text-gray-300 items-center p-4'>
        <form action='https://getform.io/f/nbvveqwb' method='POST' className='flex flex-col max-w-600   w-full'>
            <div className='pb-8'>
                <p className='text-4xl  inline font-bold border-b-4 border-pink-600'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email @ victorifeanyi2004@gmail.com</p>
            </div>
            <input className='form-bg-colour p-2 black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 form-bg-colour black' type="Email" placeholder='Email' name='email' />
            <textarea name="message" className='form-bg-colour black' placeholder='message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets collaborate</button>
        </form>
    </div>
  )
}

export default Contact