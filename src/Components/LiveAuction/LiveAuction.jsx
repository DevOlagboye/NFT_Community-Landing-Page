import React from "react";
import "./LiveAuction.css";
import Marquee from "react-fast-marquee";
// import liveAuction from "../../Assets/images/LIVE-AUCTION.png";

const text = "LIVE AUCTION.";
const LiveAuction = () => {
  return (
    <div className="liveauction-img">
      <div className="live-auction-text">
        <Marquee>
          <div className="texts">
            <p>{text}</p> <p>{text}</p>
          </div>
        </Marquee>
      </div>
      {/* <img src={liveAuction} alt="" /> */}
    </div>
  );
};

export default LiveAuction;
