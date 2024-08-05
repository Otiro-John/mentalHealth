import './Hero.css'

const Hero = () => {
  return (
    <section id="hero">
    <div className='hero'>
     <h1>Welcome To <span>mentalCheck.</span></h1>
     <p>A place where you get the freedom to interact and share your thoughts<br/> with professionals in 
        order to get clarity.
     </p>
     <button className='cta'>Get Started</button>
    </div>
    </section>
  )
}

export default Hero