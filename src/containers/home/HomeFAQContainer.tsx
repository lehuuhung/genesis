import React, { useState } from 'react';
const HomeFAQContentItem = (props: { id: number; content: string; title: string; name: string }) => {
  const [check, isCheck] = useState(null);
  console.log('CHECK', check);
  return (
    <div className="home-FAQ-container">
      <div className="flex justify-between align-center home-FAQ-component">
        <div>
          <span className="f-16 color-orange">{props.name}</span>
          <span className="white f-16">{props.title}</span>
        </div>
        {check ? (
          <img
            src="../ZoomOut/Vector.png"
            // width="24"
            // height="2"
            style={{
              height: 2,
              width: 12,
              marginTop: 12,
            }}
            onClick={() => {
              const id = check;
              console.log('ID', id);
              isCheck(null);
            }}
          />
        ) : (
          <img
            src="../Enlarge/Enlarge.png"
            // width="14"
            // height="7"
            style={{
              marginTop: 6,
              width: 14,
              height: 14,
            }}
            onClick={() => isCheck(props?.id)}
          />
        )}
      </div>
      <div className="bg-black-242424 home-FAQ-line" />
      {check === props.id ? <div className="f-12 color-gray-AAA8A6 home-FAQ-content">{props.content}</div> : null}
    </div>
  );
};

const HomeFAGContainer: React.FC = () => {
  return (
    <div
      className="p-horizontal-20"
      style={{
        paddingBottom: 80,
      }}
    >
      <div className="container">
        <div className="flex justify-center align-center home-FAQ f-26 pt-20 pb-16">faq</div>
        <HomeFAQContentItem
          id={1}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />

        <HomeFAQContentItem
          id={2}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />

        <HomeFAQContentItem
          id={3}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />

        <HomeFAQContentItem
          id={4}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />

        <HomeFAQContentItem
          id={5}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />

        <HomeFAQContentItem
          id={6}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />

        <HomeFAQContentItem
          id={7}
          name={'Q.'}
          title={'Klay는 어떻게 구매할 수 있나요?'}
          content={
            ' 1) 중앙 거래소 ‘업비트’에서 리플(XRP)을 구매합니다.\n' +
            '                2) ‘오르빗 브릿지’로  이동 합니다.\n' +
            '                https://bridge.orbitchain.io/\n' +
            '                3) Token 선택란에 XRP을 선택합니다.\n' +
            '                4) From에서 ‘Ripple’을 선택합니다.\n' +
            '                5) To에서 ‘Klaytn’을 선택합니다.\n' +
            '                6) 전환 수량을 입력합니다. [ (1)과정에서 구매한 리플 만큼만 가능합니다. ]\n' +
            '                7) ‘수령 주소’에 클립 주소를 입력합니다.\n' +
            '                8) ‘전환 시작’을 클릭 합니다.\n' +
            '                9) 업비트에서 입금 주소 혹은 QR코드를 통해서 리플(XRP)을 입금합니다.\n' +
            '                10) 잠시 기다리면 Clip으로 리플이 입금 됩니다.\n' +
            '                11) ‘Klayswap’으로 이동하여 클립을 연결합니다.\n' +
            '                12) ‘스왑’을 클릭 후 From에서 ‘리플’을 선택, To에서 ‘Klay’를 선택 합니다.\n' +
            '                13) ‘Swap’ 버튼을 클릭하면 완료됩니다.'
          }
        />
      </div>
    </div>
  );
};

export default HomeFAGContainer;
