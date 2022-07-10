import React from 'react';

export default function Resume() {
    return (
        <section id="resume">
            <h1>My Resume</h1>
            <span>
                <ul className="border">
                    <li><img src="images/html.svg" alt="html" /></li>
                    <li><img src="images/css.svg" alt="css" /></li>
                    <li><img src="images/javascript.svg" alt="javascript" /></li>
                </ul>
                <span>
                    <h2>OBJECTIVE</h2>
                    <p>To take a challenging role as a Front End Web Developer in a highly technical company where I could utilize my skills in Web Design, Front End Web Development, Software, and CMS and use these skills in providing quality service to the company.</p>
                    <div className="education">
                        <h2>EDUCATION</h2>
                        <div className="sctc">
                            <p>2020 - 2021</p>
                            <p>Associate's in Applied Science</p>
                            <p>Web Site Design / Development</p>
                            <p>Southern Crescent Technical College</p>
                        </div>
                        <div className="alabama">
                            <p>2012 - 2016</p>
                            <p>Bachelor's of Science in Commerce and Business Administration</p>
                            <p>General Business / Computing Technology & Applications</p>
                            <p>The University of Alabama</p>
                        </div>
                    </div>
                    <div className="experience">
                        <h2>EXPERIENCE</h2>
                        <div className="eyesore">
                            <p>2021 - Present</p>
                            <p>Eyesore</p>
                            <p>Front End Web Developer</p>
                            <ul>
                                <li>Applied updates to live and dev sites as needed</li>
                                <li>Created HTML / CSS for landing pages from PSDs</li>
                                <li>Debugged errors in code</li>
                                <li>Performed Proactive Monthly Service for WordPress sites hosted by Eyesore</li>
                            </ul>
                        </div>
                        <div className="sky">
                            <p>2016 - 2020</p>
                            <p>Sky Marketing and Promotions</p>
                            <p>Purchasing Logistics Specialist</p>
                            <ul>
                                <li>Created and submitted purchase orders</li>
                                <li>Placed orders and ensured products were shipped according to deadlines</li>
                                <li>Sent order notifications to appropriate internal and external customers as needed</li>
                                <li>Maintained high standards of ethics in purchasing, conduct, and confidentiality</li>
                            </ul>
                        </div>
                    </div>
                    <a href="Preston Devonshire Resume.pdf" download>Download Resume</a>
                </span>
            </span>
        </section>
    );
}