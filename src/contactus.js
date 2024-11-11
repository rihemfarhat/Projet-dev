import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <footer>
            <div className="footerContainer">
                {/* Section des icônes sociales */}
                <div className="socialIcons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-google-plus"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>

                {/* Section des liens de navigation */}
                <div className="footerNav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </div>
            <p className="copyright">© 2024 START-IT-UP. All rights reserved.</p>
            </div>
            
        </footer>
    );
}

export default ContactUs;
