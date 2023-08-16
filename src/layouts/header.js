import { useEffect } from "react";
import './header.css';

const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 0 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
return (
     <header className="header-section d-none d-xl-block">
          <div className="py-3 d-flex justify-content-end">
            <a href="" className="btn btn-dark border-0 rounded-4 py-2 px-3 m-2">Sign Up</a>
            <a href="" className="btn btn-light rounded-4 py-2 px-3 m-2">Log In</a>
          </div>
     </header>
  );   
};

export default Header;