"use client";

import { useRef } from "react";
import UploadForm from "../../../components/UploadForm";

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';

export default function Dashboard() {
  const fileInput = useRef<HTMLInputElement>(null);

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    const response = await fetch("/api/uploadImage", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

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
    var win = window.open("/questions/Interview_Questions-Machine_Learning_Engineer.pdf", '_blank');
    win.focus();
  }

  const handleSeeAnswers = () => {
    console.log('See Answers');
  }

  const handleViewResults = () => {
    console.log('View Results');
  }

  const handleSyncWithATS = () => {
    console.log('Sync with ATS');
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-12 bg-gray-100">
      <Header />

      <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-black bg-opacity-70 absolute inset-0"></div>
        <div className="hero-content text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-8">Employer Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">

            <form className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700">
                <input type="file" name="file" ref={fileInput} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none" />
              </label>
              <Button type="submit" onClick={uploadFile} className="btn-primary w-full">
                Upload job description 📄
              </Button>
            </form>

            <Button onClick={handleCreateJob} className="btn-primary w-full">Create Job 💼</Button>
            <Button onClick={handleSendInvite} className="btn-primary w-full">Copy Invite Link 📋</Button>
            <Button onClick={handleSeeQuestions} className="btn-primary w-full">See Questions ❔</Button>
            <Button onClick={handleSeeAnswers} className="btn-primary w-full">See Answers 🙋</Button>
            <Button onClick={handleViewResults} className="btn-primary w-full">View Results 📥</Button>
            <Button onClick={handleSyncWithATS} className="btn-primary w-full">Sync with Applicant Tracking System (ATS) 🔄</Button>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
