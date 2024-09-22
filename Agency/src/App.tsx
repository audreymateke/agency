import HeroSection from './page2/HeroSection';
import TopPage from './TopPage';
import Services from './page3/Services';
import './App.css'
import NewD from './page4/NewD'
import Header from './page1/header'
import Card_2 from './page4/card2';
import Process from './page5/process'

function App() {

    return (
        <>
            <Header></Header>
            <TopPage></TopPage>
            <HeroSection />
            <Services/>
            <NewD></NewD>
            <Card_2></Card_2>
            <Process></Process>
        </>
    )
}

export default App;