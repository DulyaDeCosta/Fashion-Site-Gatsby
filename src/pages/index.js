import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <CardSection />
      <Footer />
    </>
  );
}

export default IndexPage;
