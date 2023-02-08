import { Link } from "react-router-dom"


function About() {
  return (
    <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="">
                    <h1 className="text-5xl font-bold text-yellow-500">About Me</h1>
                    <p className="py-6 text-xl text-white leading-relaxed">I'm very ambitous front-end developer looking for a role in established IT company or a Start Up with a opportunity to work with latest technologies on challenging and diverse projects. 
                    <br />
                    I'm confident, naturally curious and consistently working and upskilling.
                    <br />
                    If I need to define myself that would be tech obsessed and EDM fanatic!!  
                    </p>
                    <button className="btn btn-primary"><Link to='/'>Back To Home</Link></button>
                </div>
                <div>
                    some Image
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About