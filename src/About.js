import React from 'react';

export default function About() {
    return (
        <section id="about">
            <h1>About Me</h1>
            <span>
                <ul className="border">
                    <li><div className="music">Music<img src="images/headphones.svg" alt="headphones" /></div></li>
                    <li><div className="sports">Sports<img src="images/american-football.svg" alt="football" /></div></li>
                    <li><div className="games">Games<img src="images/console.svg" alt="video game controller" /></div></li>
                </ul>
                <span id="info">
                    <p className="bold">My name is Preston Devonshire. I have been studying web development since 2017.</p>
                    <p>When I'm not making websites, you can find me listening to my favorite music, watching sports, spending time with my dog Skywalker, or playing video games.</p>
                    <a href="Preston Devonshire Resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
                </span>
            </span>
        </section>
    );
}