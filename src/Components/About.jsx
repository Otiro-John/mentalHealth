import './About.css'
import img from '../assets/about.jpg'
const About = () => {
  return (
    <section id="about">
    <div className='section test'>
     <div className="title">About-Us</div>
     <div className="content">
    <div className="about-text">
        <h1>Create a healthy <span>life you love!</span></h1>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
        a pretium mi sem ut ipsum. Fusce fermentum. Pellentesque libero tortor, tincidunt et.
        </p>
        <button className='about-btn'>Know More.</button>
    </div>
    <div className="about-image">
 <img src={img}  />
    </div>
     </div>
    </div>
    </section>
  )
}

export default About