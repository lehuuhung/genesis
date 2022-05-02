import Footer from 'components/Footer';
import Header from 'components/Header';
import AuctionContainer from 'containers/auction/Auction';
import HomeContainer from 'containers/home/HomeContainer';
import MintingContainer from 'containers/minting/MintingContainer';
import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div
      className="font-sans "
      style={{
        background: '#111111',
        color: '#fff',
      }}
    >
      <Header />
      <main>
        {/*<Layout>*/}
          <HomeContainer />
        {/*</Layout>*/}
      </main>
      <Footer />
    </div>
  );
}
