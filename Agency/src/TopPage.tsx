import './index.css'
import Hero_img from './assets/Hero_Desktop_Img.png'
import trending_flat from './assets/trending_flat_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import play from './assets/slow_motion_video_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'

function TopPage() {
    return (
        <>

            <section>
                <div id='rgt'>
                    <h1>Your Partner in <br /> Digital Innovation</h1>
                    <p>Have an innnovative idea or need guidance? Our experts combine<br />
                        creativity with technology to deliver impactful solutions.Partner<br />
                        with us to elevate your brand and achieve your goals</p>
                    <div className='btns'>
                        <button className='Btn' id='F_btn'>Get Started<img src={trending_flat} id='arrow' alt=''/></button>
                        <button className='Btn' id='S_btn'>Watch the process<img src={play} id='arrow' alt=''/></button>
                    </div>
                    <footer>
                        <small>Trusted by over 100 businesses globally</small>
                        <div>
                        </div>
                    </footer>
                </div>
                <div id='lft'>
                    <img src={Hero_img} alt='hero_section' />
                </div>
            </section>
        </>
    )
}

export default TopPage;