import AuctionItem from 'components/AuctionItem';
import React from 'react';

const AuctionHistoryData = [
  { title: '0x422a...fa70', price: '333,000,000', number: 1, background: '#333333', color: '#fff' },
  { title: '0x422a...fa70', price: '323,000,000', number: 2, background: '#000000', color: '#fff' },
  { title: '0x422a...fa70', price: '313,000,000', number: 3, background: '#111111', color: '#C36F51' },
  { title: '0x422a...fa70', price: '303,000,000', number: 4, background: '#000000', color: '#fff' },
  { title: '0x422a...fa70', price: '300,000,000', number: 5, background: '#000000', color: '#fff' },
];

//title: string;
//   price: string;
//   number: number;
//   background: string;
//   color: string
const AuctionContainer: React.FC = () => {
  return (
    <div className="auction-container">
      <div className="sm:w-2/4 sm:m-auto	">
        <div className="auction-container-title">auction</div>
        <div className="auction-container-genesis">GENESIS X NFT</div>
        <img src="../Minting/Image_696.png" width="100%" height="280" />
        <div className="home-content-service">
          <div className="f-12 auction-container-timer-name">{'auction \n TIMER'}</div>
          <div>
            <div className="flex">
              <span>
                <div className="f-24">00</div>
                <div className="f-12 color-999999">day</div>
              </span>
              <span
                className="f-24"
                style={{
                  paddingLeft: 6,
                  paddingRight: 6,
                }}
              >
                :
              </span>
              <span>
                <div className="f-24">00</div>
                <div className="f-12 color-999999">hour</div>
              </span>
              <span
                className="f-24"
                style={{
                  paddingLeft: 6,
                  paddingRight: 6,
                }}
              >
                :
              </span>
              <span>
                <div className="f-24">00</div>
                <div className="f-12 color-999999">min</div>
              </span>
              <span
                className="f-24"
                style={{
                  paddingLeft: 6,
                  paddingRight: 6,
                }}
              >
                :
              </span>
              <span>
                <div className="f-24">00</div>
                <div className="f-12 color-999999">sec</div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:flex gap-3.5	mt-20	">
        <div className="minting-nft-minting sm:order-1	sm:w-2/4	">
          {/*tach component*/}
          <div className="bg-1A1A1A p-10" style={{ height: 500, overflow: 'hidden' }}>
            <div className="text-3xl text-center	">GENESIS X NFT</div>
            <div className="minting-nft-minting-title text-center text-xl	pt-12	">Highest BID</div>
            <div className="minting-nft-minting-price text-center text-2xl pt-2.5">
              <span className="color-C36F51">333,000,000</span>
              <span>GEN</span>
            </div>
            <div className="auction-container-content">
              <div className="flex justify-between auction-container-content-price-container">
                <span className="auction-container-content-price-container-title">????????? ??????</span>
                <span>
                  <span className="auction-container-content-price-container-sub-title">????????? ??????</span>
                  <span
                    className="auction-container-content-price-container-sub-title"
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      color: '#C36F51',
                    }}
                  >
                    313,000,000
                  </span>
                  <span className="auction-container-content-price-container-sub-title">GEN</span>
                </span>
              </div>
              <div className="flex justify-center align-center auction-container-content-price-container-note-container">
                <span className="auction-container-content-price-container-note">?????? 333,000,000 GEN ?????? ?????? ???????????????.</span>
                <span className="auction-container-content-price-container-sub-title">GEN</span>
              </div>
              <div className="Home-slide-button">?????? ??????</div>
            </div>
          </div>
          <div className="auction-container-content-price-container-footer flex justify-end align-center py-4">
            <span className="auction-container-content-price-container-footer-content">????????? ?????????</span>
            <img
              src="../Right/icon_Right.png"
              style={{
                width: 7.41,
                height: 12,
                paddingTop: 2,
              }}
            />
          </div>
        </div>
        <div className="auction-container-history sm:w-2/4	">
          <div className="auction-container-history-title">HISTORY</div>
          <div className="auction-container-history-title-line"></div>
          <div className="flex justify-end auction-container-history-time">Last Bid 22.02.08 13:00:00 UTC+9</div>
          <div className="scroll-auction">
            {AuctionHistoryData.map((auctionData, keyNumber) => {
              return (
                <AuctionItem
                  key={keyNumber}
                  price={auctionData?.price}
                  number={auctionData?.number}
                  background={auctionData?.background}
                  title={auctionData?.title}
                  color={auctionData?.color}
                />
              );
            })}
          </div>
          <div className="auction-container-history-content">?????? ???????????? ????????? ??? ????????? 10% ?????? ??? ?????? ???????????????.</div>
          <div className="flex justify-end auction-container-content-container py-4">
            <span className="auction-container-content-content ">?????? ?????? ??????</span>
            <img
              src="../Right/icon_Right.png"
              style={{
                width: 7.41,
                height: 12,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionContainer;
