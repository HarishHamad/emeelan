import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

export default function About() {
    useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <main id="main">
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Founded with a commitment to serve our community, we began our journey in the fields of matrimonial services, social service, and education. Over time, we evolved and expanded our horizons to include software development and consultancy. Today, we are a team of experts who are passionate about creating innovative software solutions to help businesses grow and thrive. Our focus is on delivering exceptional quality and value to our clients, and we are committed to providing personalized attention and support to ensure their success. Here are some products
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> We first product community based B2B matrimonial Application <a href="https://play.google.com/store/apps/details?id=com.emeelan">Emeelan</a></li>
              <li><i class="ri-check-double-line"></i> We have B2B LMS Product <a href="https://play.google.com/store/apps/details?id=com.gs.lms">GyanStream </a> capability of all LMS feature</li>
              <li><i class="ri-check-double-line"></i> To Connect Passout from  School and College students developed <a href="https://play.google.com/store/search?q=AluminiCloud&c=apps">AluminiCloud</a>. Also help in business and Job support </li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Our services are designed to empower farmers, educators, and businesses with the tools and solutions they need to succeed in today's fast-paced world. We believe that providing solutions, not just tools, is the key to unlocking true value for our customers. Whether it's developing software to streamline farm management, designing e-learning platforms to enhance educational experiences, or creating custom software to meet unique business needs, we are dedicated to delivering exceptional quality and value. We are committed to standing with our customers every step of the way to ensure their success.
            </p>
            <a href="/" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
      </main>
    </div>
  )
}
