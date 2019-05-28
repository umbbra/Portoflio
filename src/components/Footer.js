import React from 'react';
import '../styles/css/style.css';
const Footer = () => {
  return ( 
    <footer>
        <h3 className="contact"> Kontakt</h3>
        <p> umbra@spoko.pl</p>
        <p>8828813487</p>
        <p className="icons">
          <a href="https://www.facebook.com/patrycja.paczkowska.336"><i className="fab fa-facebook-square"/></a>
          <a href="https://github.com/umbbra"><i className="fab fa-github-square" /></a>
          <a href="https://www.linkedin.com/in/patrycja-paczkowska-172667182/"><i className="fab fa-linkedin" /></a>
        </p>
        <p className="copyright"> &copy; 2019 Patrycja Paczkowska</p>
      </footer>
   );
}
 
export default Footer;