"use client";

import { useRef } from "react";
import UploadForm from "../../../components/UploadForm";

import Footer from '../../ui/footer';
import Header from '../../ui/header';
import Button from '../../ui/button';

export default function Dashboard() {

  // Handle file uploads
  // const files = await fs.readdir("./public/uploads");
  // const images = files
  //   .filter((file) => file.endsWith(".jpg,.pdf"))
  //   .map((file) => `/uploads/${file}`);
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
          <h1 className="text-4xl font-bold">Employer Dashboard</h1>

          <div className="grid grid-cols-2 gap-4 mt-8">

          <form >
              <label>
                <input type="file" name="file" ref={fileInput} />
              </label>
              <Button type="submit" onClick={uploadFile}>
                Upload job description
              </Button>
            </form>

            <Button onClick={handleCreateJob} className="btn-primary">Create Job</Button>

            <Button onClick={handleSendInvite} className="btn-primary">Copy Invite Link 📋</Button>
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
