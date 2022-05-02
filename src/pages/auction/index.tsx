import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import AuctionContainer from 'containers/auction/Auction';
import HomeContainer from 'containers/home/HomeContainer';
import MintingContainer from 'containers/minting/MintingContainer';
import React from 'react';

export default function Auction() {
  return (
    <div
      className="font-sans "
      style={{
        background: '#000',
        color: '#fff',
      }}
    >
      <Header />
      <main>
        <Layout>
          <AuctionContainer />
        </Layout>
      </main>
      <Footer />
    </div>
  );
}
