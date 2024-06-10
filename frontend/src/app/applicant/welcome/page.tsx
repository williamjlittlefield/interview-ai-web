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
       
        <h1>Welcome to Interview AI!</h1>

        <Button onClick={launchInterview} variant="primary">Launch Interview</Button>

        <Footer />      
        
    </main>
  );
}