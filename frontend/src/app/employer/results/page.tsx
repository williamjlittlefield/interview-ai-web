"use client";

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';
import TableView from '../../ui/table-view';

export default function Results() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header />

      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-8">Results</h1>

          <TableView />

          <Button className="mt-8">Return to dashboard</Button>
        </div>
      </div>

      <Footer />

    </main>
  );
}
