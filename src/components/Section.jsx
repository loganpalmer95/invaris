import React from 'react';

export const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-6 md:px-10 ${className}`}>{children}</section>
);
