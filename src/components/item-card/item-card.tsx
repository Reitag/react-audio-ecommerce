import './item-card.css';

export function ItemCard(): React.ReactNode {
  const title = 'Infuckingcredible AirPods';
  const price = 666;
  const rate = 0.1;
  const urlPath = '/assets/headphones-1.jpg';

  return (
    <div className="item-card">
      <img src={urlPath} alt={title} />
      <div className="item-card-info">
        <h3>{title}</h3>
        <p>{price} ₽</p>
        <p>⭐ {rate}</p>
      </div>
    </div>
  );
}
