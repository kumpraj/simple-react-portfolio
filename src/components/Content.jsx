import React from 'react'
import { Link } from 'react-router-dom';
import wave from '../img/Emoji.png';
import me from '../img/profile_pic.jpg';

function Content() {
  return (
<div className="hero min-h-screen bg-base-200 overflow-hidden">
  <div className="hero-content text-center">
    <div className="min-w">
      <div className='grid md:grid-cols-2 lg:grid-cols-2 xl-grid-cols-2'>
        <div className='flex flex-wrap sm:text-center'>
          <div>
            <h1 className="text-6xl font-bold md:py-2 lg:py-2 xl:py-2">Hey <img className='inline' src={wave} alt="wave" width={40} /></h1>
            <h1 className="text-6xl font-bold">I'm Prajwal</h1>
            <p className="py-6 md:py-2 lg:py-2 xl:py-2 text-2xl sm:my-6 font-semibold leading-relaxed">I am a Web Developer. <br/> I work with HTML5, CSS3, JavaScript,React JS, Node JS, Express, MongoDB.</p>
          </div>
        </div>

        <figure className='text-center min-w mx-auto'>
            <img src={me} alt="Prajwal Kumar" className='me-img' width={350} />
             <div className='img-bg'></div>
        </figure>

      </div>
      <button className="mt-4 text-xl btn btn-ghost btn-outline btn-secondary px-6">
        <Link to='/contact'>Hire ME</Link>
      </button>
        
        
    </div>
  </div>
</div>
  )
}

export default Content