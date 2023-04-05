import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({duration:1500});
  }, [])
  return (
    <div>
<section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Better Solutions For Your Business</h1>
      <h2>We are team of talented designers, developers and out of box thinker</h2>
      <h2>We are not sellers we are thinkers</h2>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" class="btn-get-started scrollto">Know About US</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="assets/img/hero-img.png" class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
<main id="main">

    <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row" data-aos="zoom-in">
          <h3>Our Clients</h3>
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/atulakademy.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/Seervi.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/ujjain_engineering_college_ujjain.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/JIT.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/EKSAMAJ.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/GyanStream.png" class="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
</main>
    </div>
  )
}
