import React from 'react';
import './HowItWorks.css';
import Case from '../images/KB_case.png'

function HowItWorks() {
	return (
        <main>
        <div id="howsection">
            <h1>How It<em> basically</em> Works</h1>
            <p>Mechanical keyboards come in all shapes and sizes and can be customized to your every 
            specification- from the color of your case down to the springs in your switches, anything 
            can be modified or assembled. Overall however there are 3 major elements in a custom keyboard 
            that make it unique and special to its owner.</p>

            <div className="caseDiv">
                <div className="caseCard">
                    <img className="case" src={Case} /> 
                </div>
                <div className="caseCard">
                    <h3>Keycaps</h3>
                    <p className="smallerP">
                        Keycaps are the buttons you press on when you type on your keyboard, these come 
                        in many colors, styles, and materials that all factor into their price and 
                        longevity. On the lower end you can buy keycaps for incredibly cheap, though the 
                        nicest caps can run into the hundreds. </p>
                </div>
                <div className="caseCard">
                    <img className="case" src={Case} /> 
                </div>
                <div className="caseCard">
                    <h3>Switches</h3>
                    <p className="smallerP">
                        The Case is what houses all of your components and keeps it all together. 
                        Cases not only come in all shapes, sizes, and styles but the materials 
                        used in them can vary as well. the most common custom keyboard size is 
                        a 60% board (meaning 60% of a full keyboard) with plastic materials, though 
                        you can opt for a size and format of your choosing 
                     </p>
                </div>
                
                <div className="caseCard">
                    <img className="case" src={Case} /> 
                </div>
                <div className="caseCard">
                    <h3>Case</h3>
                    <p className="smallerP">
                        The Case is what houses all of your components and keeps it all together. 
                        Cases not only come in all shapes, sizes, and styles but the materials 
                        used in them can vary as well. the most common custom keyboard size is 
                        a 60% board (meaning 60% of a full keyboard) with a plastic case, though 
                        you can opt for a size and format of your choosing though some of them might 
                        be less common on the marketplace than others.
                     </p>
                </div>
                
                
            </div>
        </div>
    </main>
	);
}

export default HowItWorks;
