import React from 'react';
import BasicPage from '../templates/BasicPage';

export default function AISolutions() {
  return (
    <BasicPage title="AI Solutions">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our AI Offerings</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-slate-800 rounded-lg">
            <h3 className="text-xl font-medium">Predictive Analytics</h3>
            <p className="mt-2 text-gray-300">AI-driven forecasting solutions...</p>
          </li>
          <li className="p-4 bg-slate-800 rounded-lg">
            <h3 className="text-xl font-medium">Natural Language Processing</h3>
            <p className="mt-2 text-gray-300">Advanced text analysis tools...</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        {/* Add your content here */}
      </section>
    </BasicPage>
  );
}