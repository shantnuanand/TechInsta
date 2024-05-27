import React from "react";

const Footer = () => {
  return (
    <div id="About" className="max-w-screen-2xl bg-base-200 container mx-auto md:px-20 mt-10">
      <footer className="footer p-10 text-base-content">
        <aside>
          <img
            className="w-10 h-10"
            src="techinstaicon.png"
            alt="image"
          />
          <p>
            TechInsta Pvt.
            <br />
            Providing reliable tech since 2000
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
