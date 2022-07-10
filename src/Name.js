import React from 'react';

export default function Name() {
    return (
        <section className="name">
            <img src="images/hero.png" alt="guy at computer" />
            <span>
                <h1>PRESTON<br/>DEVONSHIRE</h1>
                <div className="border-left">
                    <p>I'm a Front End Web Developer based in Atlanta who is passionate about building beautiful and responsive websites.</p>
                    <div className="icons">
                        <a href="https://github.com/pcdevonshire" target="_blank" rel="noreferrer"><img src="images/github.svg" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/pcdevonshire/" target="_blank" rel="noreferrer"><img src="images/linkedin.svg" alt="linkedin" /></a>
                        <a href="https://codepen.io/pcdevonshire/pens/public" target="_blank" rel="noreferrer"><img src="images/codepen.svg" alt="codepen" /></a>
                    </div>
                </div>
            </span>
        </section>
    );
}