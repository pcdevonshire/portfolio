import React from 'react';

export default function Nav() {
    const darkMode = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");

        var moon = document.getElementById("moon");
        if (moon.getAttribute('src') === "images/moon.svg") {
            moon.setAttribute('src', "images/sun.svg");
        }
        else 
        {
            moon.setAttribute('src', "images/moon.svg");
        }
    }

    return (
        <header className="header">
            <div className="nav">
                <img id="menu" src="images/pd.svg" alt="menu" />
                <img id="moon" src="images/moon.svg" alt="moon" onClick={darkMode} />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}