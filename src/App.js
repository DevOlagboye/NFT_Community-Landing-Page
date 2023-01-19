import './App.css';
import HeroPage from './Components/HeroPage/HeroPage';
import NavBar from './Components/NavBar/NavBar';
import Partners from './Components/Partners/Partners';
import SuperDrops from './Components/SuperDrops/SuperDrops';
import {NFTs} from "./Components/NftCard/data"

function App() {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <Partners/>
      {NFTs.map(Nft => (
          <SuperDrops name={Nft.nftName}
          image = {Nft.nftImage}
          price = {Nft.nftPrice}
          amount = {Nft.amount}/>
      ))}
      
    </div>
  );
}

export default App;
