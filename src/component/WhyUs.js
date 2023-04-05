import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProgressBar } from "react-bootstrap";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default function WhyUs() {

    const style ={backgroundImage:" url(assets/img/why-us.png)"}
    useEffect(() => {
      AOS.init();
    }, [])
    const [index, setIndex] = useState(0);
   

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    
  return (
    
    <div>

      <main id="main">
      <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">
        <div class="section-title">
          <h2>WhyUS</h2>
          <p>At EMeelan, we are committed to making a positive impact on the world through our services. We believe that our diverse background and experience in matrimonial services, social service, education, and software development uniquely position us to provide comprehensive solutions that meet the needs of our customers. What sets us apart is our unwavering dedication to delivering exceptional quality and value, and our commitment to standing with our customers every step of the way to ensure their success. We take pride in working closely with our clients to understand their specific needs and challenges, and providing tailored solutions that help them achieve their goals. At EMeelan, we are not just another vendor - we are your partner for success.</p>
          <p>
            Below points highlight the broad range of skills and expertise that our team brings to the table, covering everything from software development and automation to monitoring and cloud infrastructure.
          </p>
        </div>
        <div class="row">

          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div class="content">
              <h3>EMeelan believe in  <strong>Customers success</strong></h3>
              <p>
                At EMeelan, we believe that our success is directly tied to the success of our customers. We are committed to providing exceptional service and support to help our customers achieve their goals. Our team is dedicated to understanding our customers' unique needs and challenges, and we work closely with them to develop customized solutions that drive results. We are passionate about building strong, long-term relationships with our customers and providing them with the tools and resources they need to succeed. Whether it's through our innovative products, expert guidance, or exceptional customer service, we are always focused on helping our customers achieve their desired outcomes.
              </p>
            </div>

            <div class="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1" href="/"><span>01</span> Testing <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Our team has extensive experience in software automation, with expertise in all levels of testing, including unit tests, functional tests, and non-functional tests.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed" href="/"><span>02</span> Development<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      We specialize in the development of a variety of programming languages, including JAVA, Python, ReactJS, and Angular.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed" href="/"><span>03</span> Advance technologies <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Our team is well-versed in a range of advanced technologies, including machine learning, deep learning, DevOps, Kubernetes, Terraform, Argocd, and Pipelines.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" class="collapsed" href="/"><span>04</span> Monitoring and Dashboard <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Our team has experience working with a range of report and monitoring tools, including Nagios, Grafana, Redash, Power BI, and Linkerd.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" class="collapsed" href="/"><span>05</span> Cloud Platforms<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      We are familiar with a variety of cloud platforms, including Azure, GCP, and EC2, and can help you optimize your cloud infrastructure for your specific needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={style} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
    </section>

   
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
          <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src="assets/img/skills.png" class="img-fluid" alt="first-slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="assets/img/skills.png" class="img-fluid" alt="second-slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="assets/img/skills.png" class="img-fluid" alt="third-slide"/>
      </Carousel.Item>
    </Carousel>
          
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Experience ultra-speed development and release with <b>Tech Meelan Engine</b>. </h3>
            <p class="fst-italic">
              At Tech Meelan, we take pride in our homegrown product that is designed to simplify the software development process. Our product includes a unique pipeline concept that seamlessly takes care of build, unit testing, quality gate checks, deployments, and various stages of testing. The entire pipeline is defined as code, making it easy to manage and maintain. Additionally, our product includes a mock service that enables users to mock APIs, Kafka, authentication, and other essential services. This is particularly useful for testing applications before they are deployed. Our product also includes a range of utilities, including data generation tools, data backups, and other configuration options, to ensure that testing is as comprehensive as possible. Furthermore, we offer a monitoring service that provides complete visibility into logs, containers, API health, errors, and performance. Users can easily access this information through our user-friendly dashboard, which provides a comprehensive view of the system's health and performance. At Tech Meelan, we are committed to simplifying the software development process and making it more efficient for our customers.
            </p>
            <p>At Tech Meelan, we understand the importance of streamlining the software development process and allowing our customers to focus on what they do best - developing software. That's why our TechEngine product is designed to take care of all the necessary processes required for software development, in a 100% automated way. This means that our customers only need to focus on developing their code with unit test cases, while our product takes care of everything else, including the automation of testing. Our TechEngine supports both on-premises and cloud-based environments, and it includes hooks that can connect to any existing system, such as Git, Confluence, LDAP, and more. This allows our customers to integrate TechEngine into their existing systems and processes seamlessly, without disrupting their workflow. With TechEngine, our customers can rest assured that their software development process will be streamlined and automated, freeing up time for them to focus on what really matters - delivering high-quality software.</p>
            <div class="skills-content">

              <div class="progress">
                <span class="skill">Pipeline <i class="val">100%</i></span>
                <div class="progress-bar-wrap">
                <ProgressBar min={0} max={100} now={100} variant="primary" striped animated />
                </div>
              </div>

              <div class="progress">
                <span class="skill">Testing Tools <i class="val">70%</i></span>
                <div class="progress-bar-wrap">
                <ProgressBar min={0} max={100} now={70} variant="primary" striped animated />
                </div>
              </div>

              <div class="progress">
                <span class="skill">Deployment <i class="val">100%</i></span>
                <div class="progress-bar-wrap">
                <ProgressBar min={0} max={100} now={100} variant="primary" striped animated />
                </div>
              </div>
              <div class="progress">
                <span class="skill">Monitoring <i class="val">85%</i></span>
                <div class="progress-bar-wrap">
                <ProgressBar min={0} max={100} now={85} variant="primary" striped animated />
                </div>
              </div>

              <div class="progress">
                <span class="skill">Reporting <i class="val">80%</i></span>
                <div class="progress-bar-wrap ">
                <ProgressBar min={0} max={100} now={85}  variant="primary" striped animated  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
      </main>
    </div>
  );
}
