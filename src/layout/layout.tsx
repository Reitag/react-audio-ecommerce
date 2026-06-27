import { Header } from '@/components/header';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container fixed>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
