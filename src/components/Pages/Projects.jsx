import Card from "../shared/Card"
import pic2 from '../../img/proj_images/2.png'
import pic5 from '../../img/proj_images/5.png'
import pic8 from '../../img/proj_images/8.png'
import pic9 from '../../img/proj_images/9.png'
import pic15 from '../../img/proj_images/15.png'
import ghf01 from '../../img/proj_images/githubfinder01.PNG'
import todo01 from '../../img/proj_images/todoapp.PNG'





function Projects() {
  return (
  <div className="hero mt-12">  
    <div className="mx-auto grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

      <Card title='Github Finder App' desc='Github profile finder app created using React JS' url={ghf01} link='https://kumpraj-github-finder-app.vercel.app/'/>

      <Card title='FullStack Todo App' desc='Todo app created using MERN stack' url={todo01} link='https://github.com/kumpraj/todo_app'/>
      
      <Card title='card-2' desc='desc-2' url={pic2} link='https://kumpraj-html-css-proj-02.netlify.app/'/>
      <Card title='card-5' desc='desc-5' url={pic5} link='https://kumpraj-html-css-proj-05.netlify.app/'/>
      <Card title='card-8' desc='desc-8' url={pic8} link='https://kumpraj-html-css-proj-08.netlify.app/'/>
      <Card title='card-9' desc='desc-9' url={pic9} link='https://kumpraj-html-css-proj-09.netlify.app/'/>
      <Card title='card-15' desc='desc-15' url={pic15} link='https://kumpraj-html-css-proj-15.netlify.app/'/>

      
      
      

    </div>
  </div>
  

  )
}

export default Projects