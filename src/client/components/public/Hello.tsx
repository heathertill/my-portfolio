import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'

export interface HelloProps extends RouteComponentProps { }

const Hello: React.FunctionComponent<HelloProps> = () => {

    const [animate, setAnimate] = useState(false);

    const handleAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFunc()
            } else {
                closeFunc()
            }
        }
    }

    const expandFunc = () => {
        let slide = document.querySelector('.lft-section');
        slide.classList.add('toggled');
    }

    const closeFunc = () => {
        let slide = document.querySelector('.lft-section');
        slide.classList.remove('toggled');
    }

    return (
        <section className="container-fluid">
            <div className="row">
                {/* <div className="col mr-auto">Heather Till</div> */}
                <img src="images/bham.jpeg" alt="birmingham skyline" className="first-section-img position-absolute" />
                <div>
                    <div className="col m-3 home-title">Heather Till</div>
                </div>
            </div>



            {/* <section className="first-section">
                <div className="sec-div">
                    <img className="sec-img" src="images/bham.jpeg" alt="bham" />
                    <div className="img-sec-div">
                        <img className="first-section-img" src="images/newGeoOver.png" alt="geoOverlay" />
                    </div>
                </div>
            </section> */}
            {/* <section id="sec2" className="second-section">
                <div className="row second-sec-div">
                    <div className="col-md lft-section">
                        <img src="images/shoppingCode.png" alt="shoppingCode" className="second-section-img" style={{ opacity: 0.75 }} />
                        <div className="box" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAnimate(e)}></div>
                    </div>
                </div>
            </section> */}
        </section>
    );
}

export default Hello;