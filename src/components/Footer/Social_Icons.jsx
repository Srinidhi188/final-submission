import React from "react";
import "../../styles/Social_Icons.css"; // Assuming CSS is in the same directory
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Social_Icons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com/your-facebook-page" // Replace with your actual Facebook link
        className="social-icon facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
       <i className='bi bi-facebook'></i>
        <span>Facebook</span>
      </a>
      <a
        href="https://www.instagram.com/srujan_reddy_2508/" // Replace with your actual Instagram link
        className="social-icon instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-instagram"></i>
        <span>Instagram</span>
      </a>
      <a
        href="https://x.com/SrujanNadipi" // Replace with your actual Twitter link
        className="social-icon twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-twitter"></i>
        <span>Twitter</span>
      </a>
      <a
        href="https://www.linkedin.com/in/srujan-reddy-b28413259/" // Replace with your actual LinkedIn link
        className="social-icon linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin"></i>
        <span>LinkedIn</span>
      </a>
    </div>
  );
};

export default Social_Icons;