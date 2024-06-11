"use client";
import Button from '../../ui/button';

export default function Welcome() {
  const launchInterview = () => {
    console.log('Launching interview...');
  };

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Welcome to <strong>AIrecruit!</strong></h1>
        
        <div className="w-full max-w-xs mb-4 mx-auto">
          <input type="text" placeholder="First name*" className="input input-bordered input-primary w-full" required />
        </div>
        <div className="w-full max-w-xs mb-8 mx-auto">
          <input type="text" placeholder="Last name*" className="input input-bordered input-primary w-full" required />
        </div>

        <Button onClick={launchInterview} className="btn-primary w-full max-w-xs py-2 mx-auto">Launch interview</Button>
      </div>
    </main>
  );
}
