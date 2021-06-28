import React from 'react';
import './Home.css';
import keySwitch from '../images/key-switch.png';
import coverKeyboard from '../images/cover-keyboard.png';
import BuildKeyboard from './BuildKeyboard';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import HowItWorks from './HowItWorks';
import About from './About';
import Build from './Build';

function Home() {
	return (
	
		<div className="app">
				
			<section className="header-keyboard">
				<BuildKeyboard />
			</section>

            <ScrollAnimation duration={.4}animateIn='animate__fadeIn'>
                <div className="howsection">
                    <HowItWorks/>
                </div>
            </ScrollAnimation>

			<ScrollAnimation duration={.4}animateIn='animate__fadeIn'>
                <div className="buildsection">
                    <Build/>
                </div>
            </ScrollAnimation>

            <ScrollAnimation duration={.4}animateIn='animate__fadeIn'>
                <div className="about">
                    <About/>
                </div>
            </ScrollAnimation>





		</div>
	);
}

export default Home;
