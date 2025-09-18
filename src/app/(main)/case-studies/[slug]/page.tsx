'use client';

import React from 'react';

const CaseStudyPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Case Study: {params.slug}</h1>
    </div>
  );
};

export default CaseStudyPage;