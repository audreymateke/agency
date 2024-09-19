import './HeroSection.css'
import geoo from '../assets/geoo.png';
function HeroSection() {
    return (
        <>
            <div className="hero-section">
                <div className="content">
                    <h5>We can't design on Canva</h5>
                    <h1>Why you should choose Evocreatives.</h1>
                    <p>
                        At Evocreatives, we blend innovation with expertise to bring your vision to life.
                        Our team is dedicated to delivering bespoke solutions that not only meet but
                        exceed your expectations.
                    </p>
                    <p>
                        With a focus on creativity, quality, and results, we ensure your brand stands out
                        in a crowded market. Choose Evocreatives for unparalleled service and transformative
                        outcomes.
                    </p>
                </div>
                <div className="image-container">
                    <img src={geoo} alt="Design Example"/>
                </div>

            </div>

            <div className="services">
                <ul>
                    <li>Product Design</li>
                    <li>Creative Visual Design</li>
                    <li>Full-Stack Development</li>
                    <li>Branding</li>
                </ul>
            </div>
        </>

    );
};

export default HeroSection;

