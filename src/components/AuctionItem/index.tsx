// @ts-ignore
const AuctionItem: React.FC = (props: { title: string; price: string; number: number; background: string; color: string }) => {
  return (
    <div className="auction-item-container">
      <div
        className="flex justify-between auction-item-container-item"
        style={{
          background: props.background ?? '#000',
        }}
      >
        <span className="flex">
          <span
            className="auction-item-container-number"
            style={{
              color: props?.color ?? '#fff',
            }}
          >
            {props.number}
          </span>
          <span
            className="auction-item-container-title"
            style={{
              color: props?.color ?? '#fff',
            }}
          >
            {props.title}
          </span>
        </span>
        <span className="flex">
          <span
            className="auction-item-container-price"
            style={{
              color: props?.color ?? '#fff',
            }}
          >
            {props.price}
          </span>
          <span className="auction-item-container-price-name">GEN</span>
        </span>
      </div>
    </div>
  );
};

export default AuctionItem;
