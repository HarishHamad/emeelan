
import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from "react";

export default function Team() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <main id='main'>
      <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Meet our strong team</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/HarishMuleva.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Harish Muleva</h4>
                <span>Chief Executive Officer</span>
                <p>23yrs of industry experience in multiple domains, tools and technologies</p>
                <div class="social">
                  <a href="https://twitter.com/hcmuleva"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/hcmuleva"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/harishmuleva/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6"  data-aos="zoom-in" data-aos-delay="200">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/aakashkag.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Akash Kag</h4>
                <span>Chief Technical Officer</span>
                <p>7yrs industry experience. Expert in Healthcare domain, cloud , ML, Deeplearnings and data analytics</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/aakashkag/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 " data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/aaditya.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Aaditya Muleva</h4>
                <span>Test Architect</span>
                <p>3 years of experience in  Kubernete, docker, Pipeline, Jenkins, Automation framework development,</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/aaditya-muleva-55533b132/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/Ramanand Sirvi.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Ramanand Sirvi</h4>
                <span>UI/UX, Fullstack developer</span>
                <p>4+ years experience in Figma, Angular ,Next.js,NestJS, Project Management,Team Management,PostgreSQL,Software Architecture,Software Design, DevOps,Google Cloud Platform (GCP),Amazon Web Services (AWS) </p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/ramanandsirvi/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
            
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/yogeshkag.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Yogesh Kag</h4>
                <span>DeveOps Lead and TestArchitect </span>
                <p>9 years of experience in Deveops responsilities infra management, automation of deveops process, and also expert in test frameworks, functional and non function test </p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/yogesh-kag-1b625825/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/YogitaRathore.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Yogita Rathore</h4>
                <span>Graphics Designer</span>
                <p>15+ years experience. Expert in Photoshop, Coral Draw, MS Office </p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/mwlite/in/yogita-rathore-13a2aa46"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
       
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/RishikeshMukati.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Rishikesh Mukati</h4>
                <span>FullStack Developer</span>
                <p>2 years of experience in Cloud, Bigdata, Monitoring and As a service developer</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/rishikesh-mukati-246242193/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>


          <div class="col-lg-6 mt-4"  data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start" >
              <div class="pic" ><img src="assets/img/team/HarishHammad.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Harish Hammad</h4>
                <span>FronEnd developer</span>
                <p>1 year of experince in Design websites with HTML, CSS,  JAVASCRIPT and react</p>
                <div class="social">
                  <a href="https://twitter.com/@harishhamad21"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100015270187948"><i class="ri-facebook-fill"></i></a>
                  <a href="https://instagram.com/smart__boy_harish?igshid=ZDdkNTZiNTM="><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/harish-hamad-23869a260"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>


          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/ManojSinghRajput.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Manoj Sing chouhan </h4>
                <span>1 year of  experience in FronEnd Developer </span>
                <div class="social">
                  <a href="https://twitter.com/manoj45381"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/manojsingh.chouhan.397"><i class="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/mr._chouhan_rajputana/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/manoj-singh-chouhan/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/SantoshRathore.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Santosh Rathore</h4>
                <span>Frontend Developer </span>
                <p>1 year of experience in HTML, CSS, JavaScript, ReactJS, TypeScript, Angular, Bootstrap </p>
                <div class="social">
                  <a href="https://twitter.com/Sainty05rathore"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/Sainty05"><i class="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/sr5_sainty/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/santosh-rathore"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/GAdityaKumar.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>G Aditya Kumar</h4>
                <span>UI/UX designer </span>
                <p>1 year of experince in UI/UX design on figma and also design websites with HTML, CSS and JAVASCRIPT </p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/yogesh-kag-1b625825/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/KunalPawar.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Kunal Pawar</h4>
                <span>Architect </span>
                <p>1 year of experience in Expert in Autocad, Photoshop, and various other designing tools </p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/yogesh-kag-1b625825/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
         
          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/BipashaMohanty.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Bipasha Mohanty</h4>
                <span>Business Analyst</span>
                <p>Entern working as business analyst</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/bipashamohanty"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
       
           <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div> 

        </div>

      </div>
    </section>
      </main>
    </div>
  )
}
