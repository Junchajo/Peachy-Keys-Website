import React from 'react';
import './About.css';
import Case from '../images/KB_case.png'

function About() {
	return (
        <main>
            	<section className="about" id="aboutsection">
					<h1 className="about-title">About</h1>
					<p className="about-info">
						We are a couple from California and we build Custom-to-order
						mechanical keyboards ranging from budget to high end. We also aim to
						educate and provide resources for those new to the Mech space. In
						the future we hope to offer very limited Peachy Keys merchandize such as
						mats, accessories and apparel.
					</p>
				</section>
				<div className="card-container">

					<div class="card">
						<div class="img-avatar"></div>
							<div class="card-text">
								<div class="portada">
								
								</div>
								<div class="title-total">   
								<div class="title">Designer</div>
								<h2>Edwin</h2>
							<div class="desc">Maker of Keyboards and Websites and stuff</div>
							</div>
						</div>
					</div>

					<div class="card">
						<div class="img-avatar"></div>
							<div class="card-text">
								<div class="portada-two">
								
								</div>
								<div class="title-total">   
								<div class="title">Owner</div>
								<h2>Monique</h2>
							<div class="desc">Maker of Keyboards and Co-Owner, likes cute things</div>
							</div>
						</div>
					</div>

					<div class="card">
						<div class="img-avatar"></div>
							<div class="card-text">
								<div class="portada-three">
								
								</div>
								<div class="title-total">   
								<div class="title">Co-Owner</div>
								<h2>Peach </h2>
							<div class="desc">Keyboard Quality Assurance, part time Australian Shepherd</div>
							</div>
						</div>
					</div>

					<div class="card">
						<div class="img-avatar"></div>
							<div class="card-text">
								<div class="portada-four">
								
								</div>
								<div class="title-total">   
								<div class="title">Investor</div>
								<h2>Moose</h2>
							<div class="desc">Peach's little brother, provides stamp of approval. Pees on floor</div>
							</div>
						</div>
					</div>

			    </div>
        </main>
	);
}

export default About;
