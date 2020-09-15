import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { urlencoded } from 'express';

export interface HelloProps extends RouteComponentProps { }

const Hello: React.SFC<HelloProps> = () => {

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
        <>
            <section className="first-section">
                <div className="sec-div">
                    <img className="sec-img" src="https://visitvulcan.com/uploads/2019/12/homeslide_visit_vulcan.jpg" alt="bham" />
                    <div className="img-sec-div">
                        <img className="first-section-img" src="images/monoOver2.png" alt="monoOverlay" />

                    </div>
                </div>


                {/* <img className="first-section-img" src="images/monoOver2.png" alt="monoOverlay" /> */}

            </section>
            <section id="sec2" className="second-section">
                <div className="row">

                    <div className="col-md lft-section">

                        <img src="images/shoppingCode.png" alt="shoppingCode" className="second-section-img" style={{ opacity: 0.75 }} />
                        <div className="box relative" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAnimate(e)}></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hello;