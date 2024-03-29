import React from 'react'
import {
    addDoc,
    collection
} from 'firebase/firestore';
import { useState } from 'react';
import { database } from './firebaseConfig';
const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const databaseReference = collection(database, 'Giatay');

    const addData = () => {
        addDoc(databaseReference, {
            name: name,
            email: email,
            message: message
        })
    }

  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-2'> 
                <p className='text-4xl font-bold inline border-b-4  border-gray-500'>Contact</p>
                <p className='py-6'>
                    Submit your message belows
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <div action="" className='flex flex-col w-full h-full md:w-1/2'>
                    <input 
                    type="text" 
                    // name="name" 
                    placeholder='Enter your Name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    onChange={(event) => setName(event.target.value)}
                    value={name} />

                    <input 
                    type="text" 
                    // name="email" 
                    placeholder='Enter your Email' 
                    className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none flex-col' 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email} />

                    <textarea 
                    // name="message" 
                    rows="10" 
                    placeholder='Enter your message' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus-outline:none'
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    >
                   </textarea>

                    <button 
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300'
                    onClick={addData}> 
                    Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact