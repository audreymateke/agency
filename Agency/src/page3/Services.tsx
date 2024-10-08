import './Services.css';

function  Services() {
  return (
    <div className="containerss">
      <div className="titless">
        <h5>OUR SERVICES</h5>
        <h1>Services we offer</h1>
      </div>
      <div className="servicess">
        <div className="service">
          <div className="icon"></div>
          <h3>Branding</h3>
          <ul>
            <li>Brand Story</li>
            <li>Visual Identity</li>
            <li>Brand Guidelines</li>
            </ul>
            <ul className="side">
            
            <li>Market Positioning</li>
            <li>Brand Management</li>
            <li>S. Media Management</li>
          </ul>
        </div>
        <div className="service">
          <div className="icon"></div>
          <h3>Industry Solutions</h3>
          <ul>
            <li>SaaS</li>
            <li>EduTech</li>
            <li>FinTech</li>
        
            <li>FoodTech</li>
          </ul>
        </div>
        <div className="service">
          <div className="icon"></div>
          <h3>Design & Development</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Mobile App Design</li>
            <li>Websites Design</li>
          
            <li>Full-stack Dev</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="service">
          <div className="icon"></div>
          <h3>Idea Implementation</h3>
          <ul>
            <li>Personal Booking.</li>
            <li>Consultancy Sessions.</li>
            <li>Strategy Development.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
