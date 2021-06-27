import React from 'react';
import './Home.css';
import keySwitch from '../images/key-switch.png';
import coverKeyboard from '../images/cover-keyboard.png';
import BuildKeyboard from './BuildKeyboard';

import HowItWorks from './HowItWorks';
import About from './About';
import Build from './Build';

function Home() {
	return (
	
		<div className="app">
				
			<section className="header-keyboard">
				<BuildKeyboard />
			</section>

			<div className="howsection">
				<HowItWorks/>
			</div>

			<div className="buildsection">
				<Build/>
			</div>

			<div className="about">
				<About/>
			</div>



		</div>
	);
}

export default Home;
