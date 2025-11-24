import React from 'react';

export const Section = ({ children, className = "", id }) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 md:px-10 ${className}`} style={{ scrollMarginTop: '80px' }}>{children}</section>
);
