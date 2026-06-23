import { ItemCard } from '@/components/item-card/item-card';
import './pages.css';

export function Catalog(): React.ReactNode {
  const itemCardArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="catalog-page">
      <div className="catalog-page-title">Наушники</div>
      <div className="catalog-page-grid">
        {itemCardArray.map(() => {
          return <ItemCard />;
        })}
      </div>
    </div>
  );
}
