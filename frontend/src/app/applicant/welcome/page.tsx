"use client";

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';

export default function Welcome() {
  const launchInterview = () => {
    console.log('Launching interview...');
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 bg-gray-100 relative">
      <Header />

      <div className="hero min-h-screen bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-black bg-opacity-75 absolute inset-0"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center py-16 px-6 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-lg w-full">
        <h1 className="text-5xl font-bold mb-8 drop-shadow-lg text-center">Welcome to <strong>airecruit!</strong></h1>

        <div className="w-full max-w-xs mb-4">
          <input type="text" placeholder="First name*" className="input input-bordered input-primary w-full" required />
        </div>
        <div className="w-full max-w-xs mb-8">
          <input type="text" placeholder="Last name*" className="input input-bordered input-primary w-full" required />
        </div>

        <Button onClick={launchInterview} className="btn-primary w-full max-w-xs py-2">Launch interview</Button>
      </div>

      <Footer />
    </main>
  );
}
