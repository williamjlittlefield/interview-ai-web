"use client";

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';
import TableView from '../../ui/table-view';

export default function Results() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 bg-gray-100">
      <Header />

      <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-black bg-opacity-75 absolute inset-0"></div>
        <div className="hero-content text-center text-white relative z-10 py-16 flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-8 drop-shadow-lg">Results</h1>

          <div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-lg shadow-2xl p-6">
            <TableView />
          </div>

          <Button className="text-center mt-8 btn-primary w-full max-w-xs py-2">← Return to dashboard</Button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
