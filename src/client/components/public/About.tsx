import * as React from 'react';

export interface AboutProps { }

const About: React.SFC<AboutProps> = () => {
    return (
        <section className="about">
            <div className="row">
                <div className="about-left">
                    <img src="/images/family.jpeg" alt="family" />
                </div>
                <div className="about-right">
                    <div>This is about me.</div>
                </div>
            </div>
        </section>

    );
}

export default About;