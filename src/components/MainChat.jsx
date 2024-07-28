import React, { useState } from 'react'
import sendbtn from '../assets/send.svg'
import userIcon from '../assets/user-icon.png'
import chatLogo from '../assets/chatgptLogo.svg'


export function MainChat() {
    const [input , setInput] = useState("")
    const [response , setResponse] = useState("")
    
    const handleSubmit = async () => {
        try {
          const res = await fetch('https://gpt-clone-alpha.vercel.app/api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: input }),
          });
          const text = await res.text(); // Get raw text
      console.log('Raw response:', text); // Log raw response

      const data = JSON.parse(text); // Parse response text to JSON
      setResponse(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
       <div className='bg-blue-950 text-gray-200 min-h-screen h-full w-4/5 flex flex-col items-center justify-between'>
        <div className='flex flex-col w-full items-center my-auto justify-center  overflow-y-scroll scroll-smooth bg-scroll'>
           <div className='flex items-start justify-center gap-5 p-5 rounded-lg max-w-2xl overflow-hidden '> <img src={userIcon} className='w-10' alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum incidunt ducimus quam ex itaque dolore hic quibusdam corrupti asperiores at, sapiente nihil.</p></div>
           <div className='flex items-start justify-center gap-5 p-5 bg-gray-600 rounded-lg  max-w-2xl overflow-hidden '> <img src={chatLogo} className='w-10' alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus velit nam exercitationem praesentium voluptates iste eaque cupiditate minima doloremque quae ipsa, quo aut odio quos, qui commodi vitae aspernatur officiis non numquam. Eaque vel laborum, earum, dolor qui ipsa possimus assumenda iure id animi corporis similique atque sed reprehenderit nulla totam nobis necessitatibus? Quae ea suscipit, illum vero voluptas, similique facilis, possimus ab ipsa unde alias!</p></div>
        </div>
        <div className='w-full flex flex-col items-center justify-center mb-4 gap-3'>
        <div className='flex items-center justify-center mt-auto w-full max-w-2xl bg-gray-600 p-4 rounded-lg'>
            <input type="text" className='bg-inherit w-full outline-none  text-white' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Send a message' />
            <button><img src={sendbtn} onClick={handleSubmit} alt="" /></button>
            
        </div>
        <p className='text-sm'>ChatGPT can make mistakes. Check important info.</p>
        </div>
       </div>
    )
}
