import React from 'react'

import {logo} from '../assets'
export const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

          <button 
            type='button'
            onClick={() => window.open('https://github.com/sam21401')}
            className='black_btn'>

              GitHub
            </button>
        </nav>

        <h1 className='head_text'>
          Summarize Articles with <br className='max-md:hidden'/>
          <span className='green-accompaniment-gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
          Get to the point, fast! 🚀<br />
          Ditch the endless AI-generated scroll.<br /><br />
          With Sumz, sift through the noise and find the gold. 🗑️✨
        </h2>

      </header>
  )
}
export default Hero