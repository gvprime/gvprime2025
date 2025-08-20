import React from 'react';
import PropTypes from 'prop-types';

export default function BasicPage({ title, children }) {
  return (
    <div className="min-h-[calc(100vh-320px)] bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

BasicPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};