import React from 'react';
import '../App.css';


function About() {
    return (
        <div class="about">
            <div class="about-container">
                <h1>About Me</h1>
                <p id="about-content">
                    I'm Jessica. I am a full stack software engineer born and bred in the bay area.
                    I first discovered my interest in programming while working at a COVID-19 test site where I began teaching
                    myself HTML and Python. I fell head over hells in love with the creativity that coding brought to my life
                    and decided to pursue this passion by enrolling in completing an accelerated full stack Software Engineering
                    Program at Hackbright Academy.
                    <br />
                    <br />
                    As my passion for programming continues to flourish, I look forward to
                    expanding my skill base and the many possibilities to come in the world of programming. I hope to
                    contribute to the world by developing software that leaves a positive impact on the communities that were
                    such an integral part of my life and continue to impact the lives of many others.
                </p>
                <div id="portrait"></div>
            </div>
        </div>
    );
}

export default About;