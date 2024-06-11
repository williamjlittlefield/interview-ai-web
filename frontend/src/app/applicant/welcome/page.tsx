"use client"

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';

export default function Welcome() {

    const launchInterview = () => {
        console.log('Launching interview...');
    }
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <Header />
       
        <h1>Welcome to <strong>airecruit!</strong></h1>

        <input type="text" placeholder="First name*" className="input input-bordered input-primary w-full max-w-xs" required />
        <input type="text" placeholder="Last name*" className="input input-bordered input-primary w-full max-w-xs" required />

        <Button onClick={launchInterview} className="btn-primary">Launch interview</Button>

        <Footer />      
        
    </main>
  );
}