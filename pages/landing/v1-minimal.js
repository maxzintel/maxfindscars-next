// pages/index.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContainerContent from '@/components/ContainerContent';

export default function Home({ posts }) {
  return (
    <main>
      <Header />
      <ContainerContent />
      <Footer />
    </main>
  );
}
