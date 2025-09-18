'use client';

import React from 'react';

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
};

export default BlogPostPage;