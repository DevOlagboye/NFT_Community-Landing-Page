import React, { useState } from "react";
import "./NftCard.css";
import { Modal } from "antd";
import ethImage from "../../Assets/images/ETH.png";
import { NFTs } from "./data";

const NftCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const showModal = (Nft) => {
    setIsModalOpen(true);
    setModalContent([Nft]);
  };
  const handleMint = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="nftcard-container">
      {NFTs.map((Nft) => (
        <div className="nftcard" key={Nft.key}>
          <div className="nftcard-details">
            <img className="nft-image" src={Nft.nftImage} alt="" />
            <h5 className="nft-name">{Nft.nftName}</h5>
            <div className="nft-price-number">
              <img src={ethImage} alt="" className="eth-logo" />
              <span className="nft-price">{Nft.nftPrice}</span>
              <h5 className="nft-price-number-text">
                {Nft.key} of {NFTs.length}
              </h5>
            </div>
            <hr className="nft-line" />
            <div className="nft-time-button">
              <div className="countdown">
                <p>3h 25m 3s</p>
              </div>
              <button className="bid" onClick={() => showModal(Nft)}>
                Place a bid
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal
        className="nft-modal"
        open={isModalOpen}
        centered={true}
        footer={null}
        onOk={handleMint}
        onCancel={handleCancel}
      >
        {modalContent.map((newModal) => (
          <div className="nft-modal-content" key={newModal.nftName}>
            <div className="nft-modal-image">
              <img src={newModal.nftImage} alt="" className="nft-modal-img" />
            </div>
            <div className="nft-modal-details">
              <h5 className="modal-text">{newModal.nftName}</h5>
              <div className="modal-logo-price">
                <img className="eth-logo" src={ethImage} alt="" />
                <h5 className="modal-price">{newModal.nftPrice} ETH</h5>
              </div>
              <div className="nft-button">
                <button className="secondary-btn" onClick={handleCancel}>
                  Not Yet
                </button>
                <button className="primary-btn" onClick={handleMint}>
                  Mint
                </button>
              </div>
            </div>
          </div>
        ))}
      </Modal>
      <div>
        <button className="view-more-btn">View More</button>
      </div>
    </div>
  );
};

export default NftCard;
