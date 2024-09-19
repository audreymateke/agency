import './index.css'
const time = new Date()
const hrs = time.getHours();
const min = time.getMinutes();


function Navbar(){
    return(
        <header>
            <div>
                <span>img</span>
                <text>Evo Creatives</text>
            </div>
            <div><p>Calgary, Canada {hrs + ' : ' + min} PM</p></div>
            <div>
                <text>Menu</text>
                <span>img</span>
            </div>
        </header>
    )
}

export default Navbar;