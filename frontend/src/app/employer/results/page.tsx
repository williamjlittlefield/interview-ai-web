"use client";

import Button from '../../ui/button';
import TableView from '../../ui/table-view';

export default function Results() {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-4xl font-thind mb-8 text-gray-900">Results</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <TableView />
        </div>

        <Button className="text-center mt-8 btn-primary w-full max-w-xs py-2 mx-auto">← Return to dashboard</Button>
      </div>
    </main>
  );
}
