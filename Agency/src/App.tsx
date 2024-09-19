import HeroSection from './page2/HeroSection';
import TopPage from './TopPage';

function App(){

    const time = new Date()
    const hrs = time.getHours();
    const min = time.getMinutes();

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
        <TopPage></TopPage>

  <HeroSection/>
 </>
 )
}

export default App;