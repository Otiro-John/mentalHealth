
import Slider from 'react-slick';
import './Testimonial.css';
import team from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';
import team4 from '../assets/team-4.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ex vero, laudantium sit deleniti rem enim placeat rerum eos praesentium ullam aliquam inventore adipisci odit assumenda optio eligendi eveniet.",
    img: team,
    name: "Ian Doe",
    position: "Anxiety Patient"
  },
  {
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ex vero, laudantium sit deleniti rem enim placeat rerum eos praesentium ullam aliquam inventore adipisci odit assumenda optio eligendi eveniet.",
    img: team2,
    name: "Jane Doe",
    position: "Anxiety Patient"
  },
  {
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ex vero, laudantium sit deleniti rem enim placeat rerum eos praesentium ullam aliquam inventore adipisci odit assumenda optio eligendi eveniet.",
    img: team3,
    name: "Henry Doe",
    position: "ADHD Patient"
  },
  {
    quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ex vero, laudantium sit deleniti rem enim placeat rerum eos praesentium ullam aliquam inventore adipisci odit assumenda optio eligendi eveniet.",
    img: team4,
    name: "Mary Doe",
    position: "Anxiety Patient"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section id="tests">
    <div className='testimonials'>
      <div className="title">Testimonials</div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="content">
            <div className="testimonies">
              <blockquote>{testimonial.quote}</blockquote>
              <div className="profile">
                <div className="img">
                  <img src={testimonial.img} alt="..." />
                </div>
                <div className="text">
                  <h2>{testimonial.name}</h2>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default Testimonials;
