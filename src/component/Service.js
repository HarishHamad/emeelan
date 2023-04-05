
import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from "react";

export default function Service() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <main id='main'>
      <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>
            At Tech Meelan, we offer a wide range of services to support software development projects. Our experienced team is well-equipped to handle everything from development to testing to DevOps and UI/UX design.

Our development services include expertise in a variety of programming languages, including Java, Python, ReactJS, and Angular. We also have extensive experience in machine learning, deep learning, and other advanced technologies. Our team is committed to staying up-to-date with the latest trends in software development and technology, ensuring that our clients receive the most advanced solutions possible.

In addition to development, we offer comprehensive testing services to ensure that software meets the highest quality standards. Our testing services cover all levels, from unit testing to functional and non-functional testing. We also offer automation services to streamline the testing process and improve efficiency.

Our DevOps services cover everything from continuous integration and continuous delivery to infrastructure management. We have experience working with a range of DevOps tools, including Kubernetes, Terraform, and Argocd, and we can help you optimize your DevOps processes to improve efficiency and productivity.

Finally, our UI/UX design services can help you create a user-friendly and engaging interface for your software. Our designers have extensive experience in creating intuitive interfaces that are both visually appealing and easy to use. Whether you need a complete redesign or just a few tweaks, we can help you create a UI/UX design that meets your specific needs.

Overall, our range of services covers all aspects of software development, from initial design and development to testing, DevOps, and UI/UX design. We are committed to delivering high-quality solutions that meet our clients' unique needs and exceed their expectations</p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="/">Development services</a></h4>
              <p>Development services in Java, Python, ReactJS, Angular, and other advanced technologies</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="/">Testing services</a></h4>
              <p>Comprehensive testing services, including unit testing, functional testing, and non-functional testing. Automation services to streamline the testing process and improve efficiency</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="/">DevOps services</a></h4>
              <p>DevOps services covering continuous integration and continuous delivery, infrastructure management, and optimization of DevOps processes.</p>
              <p>Support for on-premises and cloud-based environments</p>
              <p>Integration with existing systems, including Git, Confluence, LDAP, and more</p>
              <p>Monitoring services for complete visibility into logs, containers, API health, errors, and performance</p>
              <p>Dashboard capabilities for a comprehensive view of system health and performance
                Data generation tools, data backups, and other configuration options for comprehensive testing.
              </p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <h4><a href="/">UI/UX design services </a></h4>
              <p>UI/UX design services to create user-friendly and engaging interfaces for software applications</p>
            </div>
          </div>

        </div>

      </div>
    </section>


    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Ready to take your business to the next level? Contact us now!</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="/">Call To Action</a>
          </div>
        </div>

      </div>
    </section>
      </main>
    </div>
  )
}
