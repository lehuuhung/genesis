import { divide } from 'lodash';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import useDetecDevice from '../../hooks/useDeviceDetect';
// import  "../../styles/components/_footer.css";
// import Image from "next/image";

const Footer: React.FC = () => {
  const router = useRouter();
  const isMobile = useDetecDevice();
  const [language, isLanguage] = useState(false);
  return (
    <footer>
      {isMobile ? (
        <div className="container footer-container">
          <div className="flex justify-center items-center footer_component pb-4	">
            <a>이용약관</a>
            <a
              style={{
                height: 13,
                width: 1,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              |
            </a>
            <a>개인정보처리방침</a>
          </div>
          <div className="flex items-center justify-center">
            <img className="footer_icon" src="../Menu/menu-brown.png" width="26" height="26" />
            <img className="footer_icon" src="../Twitter/Twitter.png" width="20" height="17.26" />
            <img className="footer_icon" src="../Telegram/Telegram.png" width="19" height="16.89" />
            <img className="footer_icon" src="../Discord/Discord.png" width="22" height="15.69" />
            <img className="footer_icon" src="../Icon/Icon.png" width="21" height="18.9" />
          </div>
          <div className="footer-language flex justify-center items-center">
            <div
              className="footer-language-item flex"
              style={{
                background: !language ? '#fff' : '#000',
                color: !language ? '#000' : '#fff',
              }}
              onClick={() => isLanguage(false)}
            >
              ENG
            </div>
            <div
              className="footer-language-item flex"
              style={{
                background: !language ? '#000' : '#fff',
                color: !language ? '#fff' : '#000',
              }}
              onClick={() => isLanguage(true)}
            >
              KOR
            </div>
          </div>
          <div className="footer-line" />
          <div className="footer-logo flex">
            <img src="../Logo/Logo.png" width="100" height="20" />
          </div>
          <div>
            <div className="flex footer-content">© Copyright 2022 Hyundai Motor Company. All Rights Reserved.</div>
          </div>
        </div>
      ) : null}
      <div className="container footer-container">
        <div className="flex justify-between items-center	">
          <div className="flex justify-center items-center footer_component">
            <a>이용약관</a>
            <a
              style={{
                height: 13,
                width: 1,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              |
            </a>
            <a>개인정보처리방침</a>
          </div>
          <div className="flex items-center justify-center">
            <img className="footer_icon" src="../Twitter/Twitter.png" width="20" height="17.26" />
            <img className="footer_icon" src="../Telegram/Telegram.png" width="19" height="16.89" />
            <img className="footer_icon" src="../Discord/Discord.png" width="22" height="15.69" />
            <img className="footer_icon" src="../Icon/Icon.png" width="21" height="18.9" />
          </div>
        </div>

        <div className="footer-line" />
        <div className="footer-logo flex">
          <img src="../Logo/Logo.png" width="100" />
        </div>
        <div>
          <div className="flex footer-content">© Copyright 2022 Hyundai Motor Company. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
