import * as React from 'react';

export interface AboutProps { }

const About: React.SFC<AboutProps> = () => {
    return (
        <section className="about">
            <div className="row ml-0">
                <div className="about-left col-md">
                    <div className="about-img-div">
                        <img className="about-image" src="/images/family.jpeg" alt="family" />
                    </div>
                </div>
                <div className="about-right col-md">
                    <div className="about-text">
                        <div className="about-text-heading">Heather Till</div>
                        <div className="about-text-content">The best thing about me is that I am a problem solver</div>
                    </div>
                </div>
            </div>
            <div className="skills-section p-3">
            <div className="skills-title">My Skills</div>
                <div className="row about-skills py-3 mx-5">
                    <div className="col-md">
                        <ul className="skill-list">
                            <li>ReactJS</li>
                            <li>React Native</li>
                            <li>JQuery</li>
                            <li>DOM</li>
                            <li>MySQL</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="skill-list">
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="skill-list">
                            <li>JSON</li>
                            <li>GitHub</li>
                            <li>VSCode</li>
                            <li>Stripe</li>
                            <li>TWilio</li>
                            <li>Mailgun</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;