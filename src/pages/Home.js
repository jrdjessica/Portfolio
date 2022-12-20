import React from 'react';


const projects = [
    {
        "title": "Etsy Insider",
        "description": "Etsy Insider is a full stack web app that provides Etsy shop owners a tool to visualize and analyze their shop's performance. Users' shop data is used to dynamically generate a display of customer locations, sales, etc.",
        "tech": "Python | Javascript | Flask | React | PostgreSQL | SQL | SQLAlchemy | HTML | CSS | Bootstrap",
        "github": "https://github.com/jrdjessica/Project",
        "visit-msg": "Demo",
        "visit": "https://www.youtube.com/watch?v=g8ib4Xxm5k4"
    },
    {
        "title": "Counting Cards",
        "description": "This app providers users a tool to learn how to count cards in blackjack. Users follow a tutorial and subsequently practice their newfound skills in an exercise.",
        "tech": "Javascript | React | HTML | CSS",
        "github": "https://github.com/jrdjessica/Counting-Cards",
        "visit-msg": "Visit",
        "visit": "https://jrdjessica.github.io/Counting-Cards"
    },
    {
        "title": "Personal Portfolio",
        "description": "A site for my personal projects and career updates to live on. This ongoing project is hosted on Github Pages and is being continuously updated.",
        "tech": "Javascript | React | HTML | CSS | Bootstrap",
        "github": "https://github.com/jrdjessica/portfolio",
        "visit-msg": "",
        "visit": "https://jrdjessica.github.io/"
    },
]


function Button(props) {
    // Buttons for github, visit site/view demo

    function VisitLink(link) {
        // Opens link in new tab
        window.open(
            link, "_blank")
    }

    return (
        <div className="button">
            <button key='btn' className={props.class} onClick={() => VisitLink(props.link)}>{props.message}
                {props.message === '' && <i className="bi-github" role="img" aria-label="GitHub"></i>}
            </button>
        </div>
    )
}


function Projects(props) {
    // Display projects

    return (
        <div className="proj-item">
            <h3 key='proj-title'>{props.project['title']}</h3>
            <p key='description'>{props.project['description']}</p>
            <p key='tech'>{props.project['tech']}</p>
            <Button message={''} link={props.project['github']} class={'btn'} name="Github Code" />
            {props.project['visit-msg'] && <Button message={props.project['visit-msg']} link={props.project['visit']} class={'btn'} />}
        </div>
    )
}


function Portfolio() {
    // Display portfolio

    return (
        <div className="projects">
            {projects.map((project, index) => <Projects key={index} project={project} />)}
            <div className="circle">
                <p id='circle-text'>Check often for updates on my newest projects.<br />Or contact me below.</p>
                <Button message={'Contact Me'} link={'https://jrdjessica.github.io/portfolio/#/contact'} class={'contact-btn'} />
            </div>
        </div >
    );
}

function Home() {
    return (
        <div>
            <div class="portfolio-header">
                <div class="portfolio-heading">
                    <h1>Welcome</h1>
                    <h3>Jessica Dea</h3>
                    <h3>Software Engineer</h3>
                    <div class="line"></div>
                </div>
            </div>
            <div class="portfolio-divider">
                <div class="divider-line"></div>
                <h2>Projects</h2>
                <div class="divider-line"></div>
            </div>
            <Portfolio />
        </div>

    );
}

export default Home;