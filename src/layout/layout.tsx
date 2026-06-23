import { Header } from '@/components/header/header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
