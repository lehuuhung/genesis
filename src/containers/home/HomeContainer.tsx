/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import NftItem from '../../components/NftItem';
import Carousel from '../../components/Carousel';
import RoadMapItem from 'components/RoadMapItem';
import HomeFAQContainer from './HomeFAQContainer';
import { useMediaQuery } from 'react-responsive';
const Roadmap1 = [{ title: 'GENESIS TWO LINES', subtitle: '화이트리스팅', number: 1 }];
const Roadmap2 = [{ title: 'TWO LINES', subtitle: '민팅 & 리빌', number: 2 }];
const Roadmap3 = [{ title: 'GENESIS TWO LINES', subtitle: '화이트리스팅', number: 3 }];
const Roadmap4 = [{ title: 'TWO LINES', subtitle: '민팅 & 리빌', number: 4 }];
const Roadmap5 = [{ title: 'GENTOKEN', subtitle: '화이트리스팅', number: 5 }];
const Roadmap6 = [{ title: 'MISSION', subtitle: '민팅 & 리빌', number: 6 }];
const Roadmap7 = [{ title: 'LIMITED EDITION ', subtitle: 'NFT 경매', number: 7 }];
const Roadmap8 = [{ title: '거버넌스', subtitle: 'OPEN', number: 8 }];
const Roadmap9 = [{ title: 'CSR', subtitle: '', number: 9 }];
const Roadmap10 = [{ title: 'CSR', subtitle: '', number: 10 }];
const HomeContainer: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <div className="relative">
        <img className="relative h-96 md:h-2/4 w-full" src="../Home/Image_26.png" />
        <div className="home_slide absolute">
          <div className="container">
            <div className="home-slide-name md:text-7xl	">
              TWO LINES NFT <br></br> COMING SOON
            </div>
            <div className="home-slide-content">22.03.18 22:00까지 사전 등록 </div>
          </div>
        </div>

        <div className="container">
          <div className="Home-slide-view-button absolute sm:w-64 sm:top-2/3">
            <div className="Home-slide-button">사전 등록 신청</div>
          </div>
        </div>

        <div className=" sm:absolute sm:bottom-0 sm:w-full">
          <div className=" sm:container ">
            <div className="home-content-service">
              <div className="f-12">1st Drop</div>
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
        </div>
      </div>

      <div className="home-container-content ">
        <div className="container">
          <div className="home-title uppercase text-center py-20 text-5xl	">TWO LINES NFT</div>
          <img src="../Home/Image_19.png" style={{ width: '100%', height: 640 }} />
          <div className="home-content py-20">
            <div
              style={{
                paddingBottom: 10,
              }}
            >
              제네시스 엠블렘의 윙을 형상화한 TWO LINES 디자인은 2017년 GV80 콘셉트카에 처음 적용되어 제네시스의 강력한 디자인 아이콘으로
              자리매김하였습니다.
            </div>
            <div
              style={{
                paddingBottom: 10,
              }}
            >
              TWO LINES NFT는 제네시스 차량 아트워크와 함께 제네시스를 상징하는 TWO LINES 디자인을 극대화한 것이 특징입니다.
            </div>
            <div>TWO LINES 커뮤니티만을 위한 다양한 미션과 혜택을 경험해보세요.</div>
          </div>
        </div>

        <div className="home-content-content flex justify-between	items-center ">
          <div className="container">
            {/* showIndicators={false} */}
            <Carousel rows={1} columns={1}>
              {[
                {
                  url: '../Home/Image_417.png',
                },
                {
                  url: '../Home/Image_419.png',
                },
                {
                  url: '../Home/Image_419.png',
                },
              ].map((item, idx) => (
                <div key={idx} style={{ height: 270 }}>
                  <img src={item.url} height="100%" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="home-content-item-title text-5xl uppercase text-center py-20">two lines nft benefit</div>
        <div className="box-NftItem">
          <div className="container sm:grid sm:grid-cols-4 sm:gap-7">
            <NftItem
              url="../Home/Image_417.png"
              name={'GEN TOKEN'}
              content={
                'NFT 보유 및 미션 참여시, GEN TOKEN을 획득\n' + '가능합니다. GEN TOKEN은 리워드 및 한정판 NFT 구매에 활용할 수 있습니다.'
              }
            />

            <NftItem
              url="../Home/Image_418.png"
              name={'limited edition NFT '}
              content={'TWO LINES 홀더만을 위한 한정판 NFT경매에 참여하실 수 있습니다.'}
            />

            <NftItem
              url="../Home/Image_419.png"
              name={'Reward'}
              content={
                '제네시스의 특별함을 경험할 수 있는 다양한 \n' +
                '스포츠, 모터쇼, 컬쳐 이벤트 우선 초청 및 NFT \n' +
                '홀더 만을 위한 스페셜 프로그램을 제공합니다.'
              }
            />
            <NftItem
              url="../Home/Image_420.png"
              name={'GOVERNANCE'}
              content={
                'TWO LINES NFT는 GOVERNANCE을 포함\n' + '합니다. TWO LINES 홀더는 프로젝트의 주요 \n' + '의사 결정에 참여할 수 있습니다.'
              }
            />
          </div>
        </div>

        <div className="section-roadmap mt-12	pb-32	">
          <div className="container">
            <div className="section-roadmap-title py-20 text-center">ROAD MAP</div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 ">
              <RoadMapItem total={2} data={Roadmap1} />
              <RoadMapItem total={2} data={Roadmap2} />
              <RoadMapItem total={2} data={Roadmap3} />
              <RoadMapItem total={2} data={Roadmap4} />
              <RoadMapItem total={2} data={Roadmap5} />
              <RoadMapItem total={2} data={Roadmap6} />
              <RoadMapItem total={2} data={Roadmap7} />
              <RoadMapItem total={2} data={Roadmap8} />
              <RoadMapItem total={2} data={Roadmap9} />
              <RoadMapItem total={2} data={Roadmap10} />
            </div>
          </div>
        </div>
      </div>
      <HomeFAQContainer />
    </>
  );
};

export default HomeContainer;
