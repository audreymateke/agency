import './index.css'
import Hero_img from './assets/Hero_Desktop_Img.png'


function TopPage(){
    return(
       <>
       
        <section>
            <div id='rgt'>
                <h1>Your Partner in <br/> Digital Innovation</h1>
                <p>Have an innnovative idea or need guidance? Our experts combine<br/>
                creativity with technology to deliver impactful solutions.Partner<br/>
                with us to elevate your brand and achieve your goals</p>
                <div className='btns'>
                    <button className='Btn' id='F_btn'>Get Started</button>
                    <button className='Btn' id='S_btn'>Watch the process</button>
                </div>
            </div>
            <div id='lft'>
                <img src={Hero_img} alt='hero_section'/>
            </div>
        </section>
        <footer>
            <small>Trusted by over 100 businesses globally</small>
            <div>
            </div>
        </footer>
       </>
    )
}

export default TopPage;