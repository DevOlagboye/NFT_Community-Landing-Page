import './App.css';
import HeroPage from './Components/HeroPage/HeroPage';
import LiveAuction from './Components/LiveAuction/LiveAuction';
import NavBar from './Components/NavBar/NavBar';
import Partners from './Components/Partners/Partners';
import SuperDrops from './Components/SuperDrops/SuperDrops';

function App() {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <Partners/>
      <SuperDrops/>
      <LiveAuction/>
    </div>
  );
}

export default App;
