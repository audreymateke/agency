import HeroSection from './page2/HeroSection';
import TopPage from './TopPage';
import Services from './page3/Services';
import './App.css'
import NewD from './page4/NewD';
import Header from './page1/header'

function App() {

    return (
        <>
            <Header></Header>
            <TopPage></TopPage>
            <HeroSection />
            <Services/>
            <NewD></NewD>
        </>
    )
}

export default App;