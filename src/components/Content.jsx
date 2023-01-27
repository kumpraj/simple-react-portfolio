import React from 'react'
import wave from '../img/Emoji.png';
import me from '../img/profile_pic.jpg';

function Content() {
  return (
    <div className='content'>
        <main>
            <div>
                <h1>Hi <img src={wave} alt="wave" width={40} /></h1>
                <h1>I'm Prajwal</h1>
                <h1>Full Stack Developer</h1>
                <p>I design and developer experiences that makes people's live simpler through Web Apps. I work with HTML5, CSS3, JavaScript,React JS, Node JS, Express, MongoDB.</p>
            </div>

            <div className='buttons'>
                <button className="cta hire">Hire ME</button>
                <button className="cta project">See My Projects</button>
            </div>
        </main>
        <figure>
            <img src={me} alt="Prajwal Kumar" className='me-img' width={350} />
            <div className='img-bg'></div>
        </figure>
    </div>
  )
}

export default Content