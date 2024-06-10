"use client";

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';

export default function Dashboard() {

  const handleCreateJob = () => {
    console.log('Create Job');
  }

  const handleUploadJobDescription = (e) => {
    console.log('Upload Job Description', e.target.files);
  }

  const handleSendInvite = () => {
    console.log('Send Invite');
  }

  const handleSeeQuestions = () => {
    console.log('See Questions');
  }

  const handleSeeAnswers = () => {
    console.log('See Answers');
  }

  const handleViewResults = () => {
    console.log('View Results');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header />

      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <h1 className="text-5xl font-bold">Employer Dashboard</h1>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button onClick={handleCreateJob} className="btn-primary">Create Job</Button>
            <input type="file" accept=".txt,.pdf" onChange={handleUploadJobDescription} className="btn-secondary" />

            <Button onClick={handleSendInvite} className="btn-primary">Send Invite</Button>
            <Button onClick={handleSeeQuestions} className="btn-primary">See Questions</Button>
            
            <Button onClick={handleSeeAnswers} className="btn-primary">See Answers</Button>
            <Button onClick={handleViewResults} className="btn-primary">View Results</Button>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
