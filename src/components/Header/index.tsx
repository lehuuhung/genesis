import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

import useDeviceDetect from '../../hooks/useDeviceDetect';
import { providerState, web3State, walletState } from '../../atoms/web3Store';

const Header: React.FC = () => {
  const router = useRouter();
  const isMobile = useDeviceDetect();

  const [provider, setProvider] = useRecoilState(providerState);

  const [web3, setWeb3] = useRecoilState(web3State);
  const [walletOptions, setWalletOptions] = useRecoilState(walletState);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      },
    },
  };

  let web3Modal: Web3Modal;
  if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
      providerOptions,
    });
  }

  useEffect(() => {
    changeWeb3Provider();
  }, [provider]);

  const changeWeb3Provider = async () => {
    if (!provider) return;

    const web3 = new Web3(provider);

    setWeb3(web3);
    setWalletOptions({
      ...walletOptions,
      account: (await web3.eth.getAccounts())[0],
    });
  };

  const handleWalletConnect = async () => {
    try {
      const web3Provider = await web3Modal.connect();

      web3Provider.on('chainChanged', changeWeb3Provider);
      web3Provider.on('accountsChanged', changeWeb3Provider);
      web3Provider.on('connect', changeWeb3Provider);

      setProvider(web3Provider);
    } catch (e) {
      console.log('not wallet connected!', e);
      return;
    }
  };

  return (
    <>
      <div className="shadow-lg relative">
        <div className="lg:border-b border-main-black_20 header-container">
          <div className="container">
            <div className="flex header-content">
              <img src="../Logo/logo.png" />
              <div className="menu-right sm:w-11/12">
                <ul className="menu-right-desktop hidden sm:flex justify-evenly">
                  <li>TWO LINES</li>
                  <li>BENEFIT</li>
                  <li>ROADMAP</li>
                  <li>GUIDE</li>
                  <li>FAQ</li>
                </ul>
                <div className="menu-right-mobile flex sm:hidden">
                  <div className="flex header-wallet" onClick={handleWalletConnect}>
                    Wallet {walletOptions.account}
                  </div>
                  <img
                    src="../Wallet/Wallet.png"
                    style={{
                      width: 13.33,
                      height: 13.33,
                      marginLeft: 5,
                      marginTop: 10,
                    }}
                  />
                  <div className="header-language">ENG</div>
                  <img src="../Menu/menu.png" width="24" height="24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
