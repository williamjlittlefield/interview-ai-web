import Footer from './ui/footer';
import Header from './ui/header';
import Hero from './ui/hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header />

      <Hero />

      <Footer />

    </main>
  );
}
