import './header.css';

export function Header(): React.ReactNode {
  return (
    <header className="site-header">
      <div className="header-logo">QPICK</div>
      <div className="header-actions">
        <div className="header-link">Избранное</div>
        <div className="header-link">Корзина</div>
      </div>
    </header>
  );
}
