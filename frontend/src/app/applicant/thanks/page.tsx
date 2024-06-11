import Footer from '../../ui/footer';
import Header from '../../ui/header';

export default function Thanks() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 bg-gray-100 relative">
      <Header />

      <div className="hero min-h-screen bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-black bg-opacity-75 absolute inset-0"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center py-16 px-8 bg-white bg-opacity-95 rounded-lg shadow-2xl max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 drop-shadow-lg">Thank you for using <strong>airecruit! 🎉</strong></h1>
        <p className="text-lg text-gray-700 mb-4">We appreciate your feedback and hope you had a great experience.</p>
      </div>

      <Footer />
    </main>
  );
}
