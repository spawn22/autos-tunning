"use client";

import { NavBar, Hero, Pasos, Container, CarsInfo, WhyUs, Footer } from "./components";
import { Testimonials } from "./testimonials/components";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Hero />
        <Pasos />
        <CarsInfo/>
        <WhyUs/>
        <Testimonials/>
        <Footer/>
      </Container>
    </>
  );
}
