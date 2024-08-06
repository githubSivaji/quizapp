import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-4" id = "footer">
            <div className="px-5">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <p>
                            <strong>Email:</strong> info@example.com<br />
                            <strong>Phone:</strong> (123) 456-7890<br />
                            <strong>Address:</strong> 123 Main St, Anytown, USA
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://www.facebook.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com" className="text-dark mx-2">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                        <h5>Copyright</h5>
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;