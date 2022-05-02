const MintingContainer: React.FC = () => {
  return (
    <>
      <div className="minting">
        <div className="minting-title">TWO LINES QUANTITY</div>
        <div className="minting-line-price flex justify-between">
          <div className="minting-line-price-whitelist-container">
            <div className="minting-line-price-whitelist-container-name pb-1.5	">Whitelist</div>
            <div
              className="relative"
              style={{
                marginRight: 2,
              }}
            >
              <div className="minting-line-price-whitelist absolute"></div>
              <div className="minting-line-price-whitelist-active absolute"></div>
            </div>
            <div className="flex justify-between  minting-line-price-whitelist-price">
              <span className="minting-line-price-whitelist-price-inactive">0</span>
              <span className="justify-center align-center">
                <img
                  src="../Down/icon_minting_down.png"
                  width="6"
                  height="5"
                  style={{
                    width: 6,
                    height: 5,
                    marginLeft: 10,
                  }}
                />
                <span className="minting-line-price-whitelist-price-active">150</span>
              </span>
            </div>
          </div>
          <div className="minting-line-price-public-container">
            <div className="minting-line-price-name pb-1.5	">Public</div>
            <div className="minting-line-price-public" />
            <div className="minting-line-price-whitelist-price-inactive justify-end flex">3000</div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2	sm:gap-3.5 ">
          <img src="../Minting/Image_696.png" width="100%" />
          <div className="minting-nft p-7 sm:p-10">
            <div className="minting-whitelist-title">Whitelist minting</div>
            <div className="minting-nft-minting ">
              <div className="flex justify-end">
                <span className="minting-price-time">22.03.18 22:00:00 (UTC+9)</span>
              </div>
              <div className="flex justify-between">
                <span className="minting-price-name">MINTING STARTS AT</span>
                <span className="flex align-center justify-center">
                  <img
                    src="../Minting/icon-coin.png"
                    width="16"
                    height="16"
                    style={{
                      width: 16,
                      height: 16,
                      marginRight: 8,
                    }}
                  />
                  <span className="minting-price-price">#8585858585885</span>
                </span>
              </div>
              <div
                className="flex justify-between"
                style={{
                  paddingTop: 18,
                }}
              >
                <span className="minting-price-name">MINTING STARTS AT</span>
                <span className="flex align-center justify-center">
                  <img
                    src="../Minting/icon-coin-color.png"
                    width="16"
                    height="16"
                    style={{
                      width: 16,
                      height: 16,
                      marginRight: 8,
                    }}
                  />
                  <span className="minting-price-price color-C36F51">#8585858585885</span>
                </span>
              </div>
            </div>
            <div className="minting-nft-minting pt-12	">
              <div className="minting-nft-minting-title text-center">NFT PRICE</div>
              <div className="minting-nft-minting-price text-center">
                <span
                  className="color-C36F51"
                  style={{
                    paddingRight: 8,
                  }}
                >
                  300
                </span>
                <span>KLAY</span>
              </div>
            </div>
            <div className="minting-nft-minting-content">Per Transaction 최대 1 개</div>
            <div className="">
              <div className="Home-slide-button">MINTING</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center minting-footer">
          <span>양수도 계약서</span>
          <img
            src="../Right/icon_Right.png"
            style={{
              width: 7.41,
              height: 12,
              marginLeft: 8.59,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MintingContainer;
