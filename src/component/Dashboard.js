import React, { useEffect } from "react";
import { select, onscroll, on, scrollto } from "../component/utils";




export default function Dashboard() {
  useEffect(() => {
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }

    console.log("use effect run");
  }, []);

  const toggle = () => {
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    console.log("click");
  };

  return (
    <div>
       <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">


      <h1 class="logo me-auto"><a href="index.html">Sirvi Samaj Chart</a></h1>
      <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto " href="/">Home</a></li>
          &nbsp;   &nbsp;   &nbsp;   &nbsp;
          <li class="dropdown"><span>Member</span><i class="bi bi-chevron-down"></i>
            <ul>
           
                  <li><a href="/add">Add Member</a></li>
                  <li><a href="/view">View Member</a></li>
             
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          {/* <li><a class="nav-link scrollto" href="#why-us">WhyUS</a></li> */}
          <li><a class="nav-link scrollto" href="/services">Services</a></li>
       
          <li><a class="nav-link scrollto" href="/team">Team</a></li>
         
          <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="/about">Get Started</a></li>
        </ul>
       
       
        <button type="button" onClick={() => toggle()} className="btn">
            <i className="bi bi-list mobile-nav-toggle"></i>
          </button>
      </nav>

    </div>
  </header>
    </div>
  )
}

