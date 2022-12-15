import React from 'react';
import '../App.css';

function Skills() {
    return (
        <div>
            <div class="skills-pic">
                <h1>Skills</h1>
            </div>
            <div class="skills">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h3>Languages</h3>
                            <ul>
                                <li>Python</li>
                                <li>JavaScript (AJAX, JSON)</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                            </ul>
                            <br />
                            <h3>Frameworks & Libraries</h3>
                            <ul>
                                <li>Flask</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Jinja</li>
                            </ul>
                        </div>
                        <div class="skills-circle">
                            <div class="col-12 col-md-6">
                                <h3>Database & Industry Tools/Skills</h3>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>Command Line</li>
                                    <li>Agile/Scrum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;