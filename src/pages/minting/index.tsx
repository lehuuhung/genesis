import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import AuctionContainer from 'containers/auction/Auction';
import HomeContainer from 'containers/home/HomeContainer';
import MintingContainer from 'containers/minting/MintingContainer';
import React from 'react';

export default function Minting() {
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
        <Layout>
          <MintingContainer />
        </Layout>
      </main>
      <Footer />
    </div>
  );
}
