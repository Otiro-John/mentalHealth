import './Services.css'
import img from '../assets/team-2.jpg'
const Services = () => {
  return (
    <section id="service">
    <div className='section test'>
    <div className="title">Our-Services</div>
    <div className="content">
        <div className="cards">
        <img src={img}  alt='...'/>
        <h2>Anxieties</h2>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
            a pretium mi sem ut ipsum.
            </p>
            <button className='contact-btn'>Contact</button>
        </div>

        <div className="cards">
        <img src={img}  alt='...'/>
        <h2>Depression</h2>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
            a pretium mi sem ut ipsum.
            </p>
            <button className='contact-btn'>Contact</button>
        </div>


        <div className="cards">
        <img src={img}  alt='...'/>
        <h2>ADHD</h2>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
            a pretium mi sem ut ipsum.
            </p>
            <button className='contact-btn'>Contact</button>
        </div>

        <div className="cards">
        <img src={img}  alt='...'/>
        <h2>ADHD</h2>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
            a pretium mi sem ut ipsum.
            </p>
            <button className='contact-btn'>Contact</button>
        </div>


        <div className="cards">
        <img src={img}  alt='...'/>
        <h2>ADHD</h2>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
            a pretium mi sem ut ipsum.
            </p>
            <button className='contact-btn'>Contact</button>
        </div>


        <div className="cards">
        <img src={img}  alt='...'/>
        <h2>ADHD</h2>
        <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, 
            a pretium mi sem ut ipsum.
            </p>
            <button className='contact-btn'>Contact</button>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Services