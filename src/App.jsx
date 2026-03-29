import { Footer } from '@/components/Footer.jsx';
import { GameGrid } from '@/components/GameGrid.jsx';
import { Header } from '@/components/Header.jsx';

import '@/assets/App.css';

export function App() {
  return (
    <>
      <Header />
      <GameGrid />
      <Footer />
    </>
  );
}
