import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <CardSection />
      <Footer />
    </>
  );
};

export default IndexPage;
