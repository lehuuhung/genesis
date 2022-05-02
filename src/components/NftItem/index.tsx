import React from 'react';

const NftItem = (props: { url: string; name?: string; content?: string }) => {
  return (
    <div className="NftItem">
      <img className="home-content-item-image" src={props.url} width="100%" height="225" />
      <div className="home-content-item-name pt-5	">{props?.name}</div>
      <div className="home-content-item-content text-base	pt-2.5	">{props?.content}</div>
    </div>
  );
};

export default NftItem;
