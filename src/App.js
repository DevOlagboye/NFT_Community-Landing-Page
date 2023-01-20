import './App.css';
import Creators from './Components/Creators/Creators';
import HeroPage from './Components/HeroPage/HeroPage';
import LiveAuction from './Components/LiveAuction/LiveAuction';
import NavBar from './Components/NavBar/NavBar';
import Partners from './Components/Partners/Partners';
import SellNft from './Components/SellNft/SellNft';
import SuperDrops from './Components/SuperDrops/SuperDrops';

function App() {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <Partners/>
      <SuperDrops/>
      <LiveAuction/>
      <SellNft/>
      <Creators/>
    </div>
  );
}

export default App;
