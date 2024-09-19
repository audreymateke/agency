import './index.css'
const time = new Date()
const hrs = time.getHours();
const min = time.getMinutes();


function TopPage(){
    return(
       <>
        <header>
            <div>
                <span><img src='assets/Logo-1.png'/></span>
                <text>Evo Creatives</text>
            </div>
            <div><p>Calgary, Canada {hrs + ' : ' + min} PM</p></div>
            <div>
                <text>Menu</text>
                <span><img src=''/></span>
            </div>
        </header>
        <section>
            <div id='rgt'>
                <h1>Your Partner in <br/> Digital Innovation</h1>
                <p>Have an innnovative idea or need guidance? Our experts combine<br/>
                creativity with technology to deliver impactful solutions.Partner<br/>
                with us to elevate your brand and achieve your goals</p>
                <div className='btns'>
                    <button className='Btn'>Get Started</button>
                    <button className='Btn'>Watch the process</button>
                </div>
            </div>
            <div id='lft'>
                <img src=''/>
            </div>
        </section>
       </>
    )
}

export default TopPage;