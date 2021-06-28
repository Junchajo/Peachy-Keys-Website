import React from 'react';
import coverKeyboard from '../images/cover-keyboard.png';
import Simple from '../images/peachy-simple.png'
import './BuildKeyboard.css';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function BuildKeyBoard() {
	return (

		<ScrollAnimation duration={.7} animateIn='animate__fadeIn'>
			<div>
			<img className="cover-keyboard" src={coverKeyboard} />
			</div>
        </ScrollAnimation>
		
		
	);
}

export default BuildKeyBoard;
