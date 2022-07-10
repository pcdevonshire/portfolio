import React from 'react';

export default function Projects() {
    return (
        <section id="projects">
            <h1>My Projects</h1>
            <div className="border-left">
                <p>A collection of my favorite projects that I've worked on recently.</p>
            </div>
            <div className="grid">
                <div className="red-square">
                    <img src="images/redsquare.jpg" alt="RedSquare" />
                    <div className="code">
                        <a href="https://pcdevonshire.github.io/Red-Square/" target="_blank" rel="noreferrer">Demo</a>
                        <span>|</span>
                        <a href="https://github.com/pcdevonshire/Red-Square" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
                <div className="loopstudios">
                    <img src="images/loopstudios.jpg" alt="Loopstudios" />
                    <div className="code">
                        <a href="https://pcdevonshire.github.io/Loopstudios/" target="_blank" rel="noreferrer">Demo</a>
                        <span>|</span>
                        <a href="https://github.com/pcdevonshire/Loopstudios" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
                <div className="sunnyside">
                    <img src="images/sunnyside.jpg" alt="Sunnyside" />
                    <div className="code">
                        <a href="https://pcdevonshire.github.io/Sunnyside/" target="_blank" rel="noreferrer">Demo</a>
                        <span>|</span>
                        <a href="https://github.com/pcdevonshire/Sunnyside" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
                <div className="insure">
                    <img src="images/insure.jpg" alt="Insure" />
                    <div className="code">
                        <a href="https://pcdevonshire.github.io/Insure/" target="_blank" rel="noreferrer">Demo</a>
                        <span>|</span>
                        <a href="https://github.com/pcdevonshire/Insure" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </section>
    );
}