import React from 'react';
import './Header.css';
import peachyLogo from '../images/peachy-logo.png';
import Simple from '../images/peachy-simple.png'

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Header() {
	return (
		
		<div className="navbar">

			<ScrollAnimation offset={0} duration={.2} animateIn='animate__fadeInDown'>
			<div className="logoDiv">
				<img className="header-logo" src={peachyLogo} />
			</div>
            </ScrollAnimation>
			
			
			<nav className="header">
				<ul id="menu">
					<li ><a href="#contactsection">Contact</a></li>
					<li><a href="#buildsection">Build</a></li>
					<li><a href="#howsection">How It Works</a></li>
				</ul>
			</nav>
			
		</div>
	);
}

export default Header;
